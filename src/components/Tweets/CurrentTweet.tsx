import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams, Link} from "react-router-dom";
import {fetchCurrentTweet, setCurrentTweet} from "../../store/ducks/currentTweet/currentTweetAction";
import {useHomeStyles} from "../../pages/Home/stylesHome";
import {selectCurrentTweet, selectCurrentTweetIsLoading} from "../../store/ducks/currentTweet/currentTweetSelector";
import {Avatar, CircularProgress, Divider, IconButton, Paper, Typography} from "@material-ui/core";
import CommentIcon from '@mui/icons-material/ChatBubbleOutline';
import RepostIcon from '@mui/icons-material/Repeat';
import LikeIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Reply';
import format from 'date-fns/format'
import { ru } from 'date-fns/locale'
import classNames from 'classnames';
import {ShowImage} from "./ShowImage";

export const CurrentTweet: React.FC = () : React.ReactElement => {
    const classes = useHomeStyles()
    const dispatch = useDispatch()
    const params: {id: string} = useParams()
    const id = params.id

    const tweet = useSelector(selectCurrentTweet)
    const isLoading = useSelector(selectCurrentTweetIsLoading)

    useEffect(() => {
        if (id) {
            dispatch(fetchCurrentTweet(id))
        }
        return () => {
            dispatch(setCurrentTweet(null))
        }
    }, [dispatch, id])

    return (
        <div>
            {isLoading ? <div className={classes.tweetsCentred}><CircularProgress/></div> : tweet !== null &&
            <>
                <Paper className={classes.currentTweetWrapper} >
                    <div className={classes.tweetsHeaderUser}>
                        <Link to={`/user/${tweet.user._id}`} className={classes.currentTweetUser}>
                        <Avatar
                            className={classes.tweetAvatar}
                            alt={`Аватарка пользователя ${tweet.user.fullname}`}
                            src={tweet.user.avatarUrl}
                        />
                        <div>
                            <b>{tweet.user.fullname}</b>&nbsp;
                            <div>
                                <span className={classes.tweetUserName}>@{tweet.user.username}</span>&nbsp;
                            </div>
                        </div>
                        </Link>
                    </div>
                    <Typography className={classes.currentTweetText} gutterBottom>
                        {tweet.text}
                    </Typography>
                    <div className={classNames(classes.tweetImageWrapper, classes.currentTweetImages)}>
                        {tweet.images && <ShowImage images={tweet.images} classes={classes} customClass={classes.currentImageStyle}/>}
                    </div>
                    <span className={classes.tweetUserName}>{format(new Date(tweet.createdAt), 'H:mm', { locale: ru })} · </span>
                    <span className={classes.tweetUserName}>{format(new Date(tweet.createdAt), 'dd MMM yyyy г.', { locale: ru })}</span>
                    <div className={classNames(classes.tweetFooter, classes.currentTweetFooter)}>
                        <IconButton>
                            <CommentIcon style={{ fontSize: 25 }} />
                        </IconButton>
                        <IconButton>
                            <RepostIcon style={{ fontSize: 25 }} />
                        </IconButton>
                        <IconButton>
                            <LikeIcon style={{ fontSize: 25 }} />
                        </IconButton>
                        <IconButton>
                            <ShareIcon style={{ fontSize: 25 }} />
                        </IconButton>
                    </div>
                </Paper>
                <Divider />
            </>}
        </div>
    )
}
