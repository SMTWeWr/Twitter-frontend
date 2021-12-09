import React from 'react';
import {RouteComponentProps} from "react-router-dom";
import {useHomeStyles} from "../Home/stylesHome";
import classNames from "classnames";
import {Avatar, CircularProgress, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import {BackButton} from "../../components/Utils/BackButton";
import {Skeleton} from "@material-ui/lab";
import {Tweets} from "../../components/Tweets/Tweets";
import {User} from "../../store/ducks/user/userState";
import {useDispatch, useSelector} from "react-redux";
import {selectTweets, selectTweetsIsLoading} from "../../store/ducks/tweets/tweetsSelectors";
import {fetchTweets} from "../../store/ducks/tweets/tweetsAction";
import {AuthApi} from "../../api/authApi";

import './user.scss'
import format from "date-fns/format";
import {ru} from "date-fns/locale";


export const UserPage: React.FC<RouteComponentProps<{ id: string }>> = ({match}) => {
    const classes = useHomeStyles()
    const tweets = useSelector(selectTweets)
    const dispatch = useDispatch()
    const isLoading = useSelector(selectTweetsIsLoading)
    const [activeTab, setActiveTab] = React.useState(0)
    const [userData, setUserData] = React.useState<User | undefined>()

    const userId = match.params.id

    React.useEffect(() => {
        dispatch(fetchTweets())
        if (userId) {
            AuthApi.getUserInfo(userId).then(({data}) => {
                setUserData(data)
            })
        }
        return () => {
            setUserData(undefined)
        }
    }, [userId, dispatch])

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setActiveTab(newValue)
    }

    const tweetCount = (count: number) => {
        const last = Number(count.toString().split('').pop())
        if (last === 1) {
            return count + ' твит'
        } else if (last >= 2 && last <= 4) {
            return count + ' твита'
        } else {
            return count + ' твитов'
        }
    }

    return (
        <Paper className={classNames(classes.tweetsWrapper, 'user')} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
                <BackButton/>
                <div>
                    {!userData ? (
                        <Skeleton variant="text" width={250} height={30}/>
                    ) : (
                        <Typography variant="h6">{userData?.fullname}</Typography>
                    )}
                    {!userData ? (
                        <Skeleton variant="text" width={50}/>
                    ) : (
                        <Typography variant="caption" display="block">{tweetCount(tweets.length)}</Typography>
                    )}
                </div>
            </Paper>
            {!userData ?
                <div className={classes.tweetsCentred}>
                    <CircularProgress/>
                </div>
                : <>
                    <div className="user__header"> </div>
                    <div className="user__info">
                        <Avatar src={userData?.avatarUrl}/>
                        {!userData ? (
                            <Skeleton variant="text" width={250} height={30}/>
                        ) : (
                            <h2 className="user__info-fullname">{userData?.fullname}</h2>
                        )}
                        {!userData ? (
                            <Skeleton variant="text" width={60}/>
                        ) : (
                            <span className="user__info-username">@{userData?.username}</span>
                        )}
                        <p className="user__info-description">
                            {userData.status ? userData.status : ''}
                        </p>
                        <ul className="user__info-details">
                            <li>{userData.city ? userData.city : 'Город не указан'},
                                {userData.country ? ' ' + userData.country : ' Страна не указана'}</li>
                            <li>
                                <br/>
                            </li>
                            <li>Дата рождения: {userData.dob ? userData.dob : 'Скрыто'}</li>
                            <li>Регистрация: {userData?.createdAt && format(new Date(userData?.createdAt), 'dd MMM yyyy г.', {locale: ru})}</li>
                        </ul>
                    </div>
                    <Tabs value={activeTab} indicatorColor="primary" textColor="primary" onChange={handleChange}>
                        <Tab label="Твиты"/>
                        <Tab label="Нравится"/>
                    </Tabs>
                    <div className="user__tweets" hidden={activeTab !== 0}>
                        {isLoading ? (
                            <div className={classes.tweetsCentred}>
                                <CircularProgress/>
                            </div>
                        ) : (
                            !tweets.length ? <div className="user__likes">
                                Пользователь еще не оставлял твитов
                            </div> : (tweets.map((tweet) => (
                                <Tweets key={tweet._id} classes={classes} images={tweet.images} {...tweet} />
                            )))
                        )}
                    </div>
                    <div className="user__likes" hidden={activeTab !== 1}>
                        Понравившиеся публикации отсутствуют
                    </div>
                </>}
        </Paper>
    )
}

