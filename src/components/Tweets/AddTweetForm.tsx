import React, {useEffect, useState} from "react";
import {useHomeStyles} from "../../pages/Home/stylesHome";
import {Snackbar, TextareaAutosize} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {getSetText, selectAddFormState} from "../../store/ducks/tweets/tweetsSelectors";
import {AddFormState} from "../../store/ducks/tweets/tweetState";
import {fetchAddTweet, setAddFormStateStatus, setText} from "../../store/ducks/tweets/tweetsAction";
import {UploadImages} from "./UploadImages";
import {uploadImage} from "../../utils/uploadImage";
import {selectUserData} from "../../store/ducks/user/userSelectors";


type PropsType = {
    classes: ReturnType<typeof useHomeStyles>,
    maxRows?: number
}

export type ImageObj = {
    blobUrl: string
    file: File
}

export const AddTweetForm: React.FC<PropsType> = ({classes, maxRows}: PropsType): React.ReactElement => {
    const MAX_LENGTH = 200

    const dispatch = useDispatch()
    const [snackBar, setSnackBar] = useState<boolean>(false)
    const [images, setImages] = useState<ImageObj[]>([])

    const userData = useSelector(selectUserData)
    const text = useSelector(getSetText)
    const addFormState = useSelector(selectAddFormState)

    const textPercent = (text.length / MAX_LENGTH) * 100

    const onChangeTextArea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) {
            dispatch(setText(e.currentTarget.value))
        }
    }

    const addTweet = async () => {
        let result = []
        dispatch(setAddFormStateStatus(AddFormState.LOADING))
        for (let i = 0; i < images.length; i++) {
            const file = images[i].file
            const {url} = await uploadImage(file)
            result.push(url)
        }
        dispatch(fetchAddTweet({text, images: result}))
        dispatch(setText(''))
        setImages([])
    }

    const handleCloseSnackBar = () => {
        setSnackBar(false)
    }

    useEffect(() => {
        if (addFormState === AddFormState.ERROR) {
            setSnackBar(true)
        }
    }, [addFormState])

    return (
        <div>
            <Snackbar
                open={snackBar}
                onClose={handleCloseSnackBar}
                message="Ошибка добавления твита"
                anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
            />
            <div className={classes.addFormBody}>
                <Avatar
                    className={classes.tweetAvatar}
                    src={userData?.avatarUrl || ''}
                    alt={`Аватарка пользователя UserAvatar`}
                />
                <TextareaAutosize
                    onChange={onChangeTextArea}
                    className={classes.addFormTextarea}
                    placeholder="Что происходит?"
                    value={text}
                    maxRows={maxRows}
                />
            </div>
            <div className={classes.addFormBottom}>
                <div className={classes.addFormBottomRight}>
                    {text && <>
                            <span className={classes.textProgressLowSize}>
                                {`${text.length} / ${MAX_LENGTH}`}</span>
                        <div className={classNames(classes.addFormCircleProgress, classes.textProgressLowSize)}>
                            <CircularProgress
                                variant="static"
                                size={20}
                                thickness={5}
                                value={textPercent > 100 ? 100 : textPercent}
                                style={text.length > MAX_LENGTH ? {color: 'red'} : undefined}
                            />
                            <CircularProgress
                                style={{color: 'rgba(0, 0, 0, 0.1)'}}
                                variant="static"
                                size={20}
                                thickness={5}
                                value={100}
                            />
                        </div>
                    </>}
                    <Button
                        onClick={addTweet}
                        disabled={text.length > MAX_LENGTH || !text || addFormState === AddFormState.LOADING}
                        color="primary"
                        variant="contained">
                        {addFormState === AddFormState.LOADING ?
                            <CircularProgress color='inherit' size={15}/> : 'Твитнуть'}
                    </Button>
                </div>
                <div className={classes.addFormBottomActions}>
                    <UploadImages images={images} onChangeImages={(images) => setImages(images)}/>
                </div>
            </div>
        </div>
    )
}
