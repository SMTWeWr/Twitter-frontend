import React from "react";
import {Avatar, IconButton, Menu, MenuItem, Paper, Typography} from "@material-ui/core";
import {useHomeStyles} from "../../pages/Home/stylesHome";
import classNames from 'classnames'
import CommentIcon from '@mui/icons-material/ChatBubbleOutline';
import RepostIcon from '@mui/icons-material/Repeat';
import LikeIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Reply';
import {useHistory} from "react-router-dom";
import {formatDate} from "../../utils/formatDate";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {ShowImage} from "./ShowImage";
import {useDispatch, useSelector} from "react-redux";
import {selectUserId} from "../../store/ducks/user/userSelectors";
import {removeTweet} from "../../store/ducks/tweets/tweetsAction";


type TweetProps = {
    _id: string
    text: string
    images?: string[]
    classes: ReturnType<typeof useHomeStyles>
    createdAt: string
    user: {
        fullname: string
        username: string
        avatarUrl: string
        _id: string
    }
}

export const Tweets: React.FC<TweetProps> = ({_id, text, images, user, classes, createdAt}: TweetProps)
                                                                                : React.ReactElement => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const dispatch = useDispatch()
    const history = useHistory()
    const authUserId = useSelector(selectUserId)

    const handleClickTweet = (event: React.MouseEvent<HTMLAnchorElement>): void => {
        event.preventDefault()
        history.push(`/home/tweet/${_id}`)
    }

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        event.preventDefault()
        setAnchorEl(event.currentTarget)
    }

    const handleClose = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        event.preventDefault()
        setAnchorEl(null)
    }

    const handleRemove = (event: React.MouseEvent<HTMLElement>) => {
        handleClose(event)
        dispatch(removeTweet(_id))
    }

    return (
        <a onClick={handleClickTweet} className={classes.tweetsWrapper} href={`/home/tweet/${_id}`}>
            <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">
                <Avatar
                    className={classes.tweetAvatar}
                    alt={`Аватарка пользователя ${user.fullname}`}
                    src={user.avatarUrl}
                />
                <div className={classes.tweetContent}>
                    <div className={classes.tweetHeader}>
                        <div className={classes.tweetHeaderInfo}>
                            <b>{user.fullname}</b>&nbsp;
                            <span className={classes.tweetUserName}>@{user.username}</span>&nbsp;
                            <span className={classes.tweetUserName}>·</span>&nbsp;
                            <span className={classes.tweetUserName}>{formatDate(new Date(createdAt))}</span>
                        </div>
                        {user._id === authUserId && <div className={classes.tweetPopupMenu}>
                            <IconButton
                                aria-label="more"
                                aria-controls="long-menu"
                                aria-haspopup="true"
                                onClick={handleClick}>
                                <MoreVertIcon/>
                            </IconButton>
                            <Menu
                                id="long-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={handleClose}>
                                <MenuItem onClick={handleRemove}>
                                    Удалить твит
                                </MenuItem>
                            </Menu>
                        </div>}
                    </div>
                    <Typography className={classes.tweetTextFormat} variant="body1" gutterBottom>
                        {text}
                    </Typography>
                    <div className={classNames(classes.tweetImageInside, classes.tweetImageWrapper)}>
                        {images && <ShowImage images={images} classes={classes}/>}
                    </div>
                    <div className={classes.tweetFooter}>
                        <div>
                            <IconButton>
                                <CommentIcon style={{fontSize: 20}}/>
                            </IconButton>
                        </div>
                        <div>
                            <IconButton>
                                <RepostIcon style={{fontSize: 20}}/>
                            </IconButton>
                        </div>
                        <div>
                            <IconButton>
                                <LikeIcon style={{fontSize: 20}}/>
                            </IconButton>
                        </div>
                        <div>
                            <IconButton>
                                <ShareIcon style={{fontSize: 20}}/>
                            </IconButton>
                        </div>
                    </div>
                </div>
            </Paper>
        </a>
    )
}