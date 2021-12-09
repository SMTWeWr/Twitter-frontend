import React, {useCallback, useEffect, useRef} from 'react';
import OutlinedIcon from "@mui/icons-material/CropOriginalOutlined";
import IconButton from "@material-ui/core/IconButton";
import {useHomeStyles} from "../../pages/Home/stylesHome";
import {ImageObj} from "./AddTweetForm";
import {ShowImage} from "./ShowImage";

type UploadImagesProps = {
    images: ImageObj[]
    onChangeImages: (callback: (prev: ImageObj[]) => ImageObj[]) => void
}

export const UploadImages: React.FC<UploadImagesProps> = ({onChangeImages, images}) => {
    const classes = useHomeStyles()
    const inputRef = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.click()
        }
    }

    const handleChangeFile = useCallback((e: Event) => {
        if (e.target) {
            const target = e.target as HTMLInputElement
            const file = target.files?.[0]
            if (file) {
                const fileObj = new Blob([file])
                onChangeImages(prev => [...prev, {
                    blobUrl: URL.createObjectURL(fileObj),
                    file: file
                }])
            }
        }
    }, [onChangeImages])

    const removeImage = (url: string) => {
        onChangeImages(prev => prev.filter(obj => obj.blobUrl !== url))
    }

    useEffect(() => {
        if (!inputRef.current) return
        const ref = inputRef.current

        ref.addEventListener('change', handleChangeFile)

        return () => {
            ref.removeEventListener('change', handleChangeFile)
        }
    }, [handleChangeFile])

    return (
        <>
            <input ref={inputRef} type='file' hidden/>
            <IconButton onClick={handleClick} color="primary">
                <OutlinedIcon style={{fontSize: 26}}/>
            </IconButton>
            <div className={classes.imageWrapper}>
                <ShowImage classes={classes} images={images.map(obj => obj.blobUrl)} removeImage={removeImage}/>
            </div>
        </>
    )
}

