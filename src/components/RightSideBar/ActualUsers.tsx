import React from 'react';
import {
    Avatar,
    CircularProgress,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Paper,
    Typography
} from "@material-ui/core";
import {useHomeStyles} from "../../pages/Home/stylesHome";
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom'
import {
    selectActualUsersData,
    selectLoadingActualUsersStatus
} from "../../store/ducks/actualUsers/actualUsersSelectors";
import classNames from "classnames";
import {User} from "../../store/ducks/user/userState";

export const ActualUsers = () => {
    const classes = useHomeStyles()
    const isLoading = useSelector(selectLoadingActualUsersStatus)
    const items = useSelector(selectActualUsersData)
    let newItemsArr: User[] = []

    if (items.length >= 3) {
        newItemsArr = items.slice(0, 3)
    } else {
        newItemsArr = items
    }

    return (<>
        <Paper className={classes.rightSideBlockHeader} variant="outlined">
            <b>Кого читать</b>
        </Paper>
        <List>
            {isLoading ?
                <div className={classes.tweetsCentred}>
                    <CircularProgress/>
                </div>
                : newItemsArr.map(obj =>
                    <div key={obj._id}>
                        <Link to={`/user/${obj._id}`} className={classes.currentTweetUser} >
                            <ListItem className={classNames(classes.rightSideBlockItem, classes.rightSideBlockUsers)} >
                                <ListItemAvatar>
                                    <Avatar src={obj.avatarUrl}/>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={obj.fullname}
                                    secondary={
                                        <Typography component="span" variant="body2" color="textSecondary">
                                            {obj.username}
                                        </Typography>}
                                />
                            </ListItem>
                        </Link>
                        <Divider component="li"/>
                    </div>)}
        </List>
    </>)
}

