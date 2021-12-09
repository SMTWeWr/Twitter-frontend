import React, {useEffect} from 'react';
import {useHomeStyles} from "./stylesHome";
import {Button, CircularProgress, Hidden, Paper, Typography} from "@material-ui/core";
import {Tweets} from "../../components/Tweets/Tweets";
import {AddTweetForm} from "../../components/Tweets/AddTweetForm";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {fetchTweets} from "../../store/ducks/tweets/tweetsAction";
import {selectTweets, selectTweetsIsLoading} from "../../store/ducks/tweets/tweetsSelectors";
import {fetchTags} from "../../store/ducks/actualTags/tagsAction";
import {Link, Route} from 'react-router-dom';
import {BackButton} from "../../components/Utils/BackButton";
import {CurrentTweet} from "../../components/Tweets/CurrentTweet";
import {fetchActualUsers} from "../../store/ducks/actualUsers/actualUsersAction";

export const Home = () => {
    const classes = useHomeStyles();
    const dispatch = useDispatch()

    const tweets = useSelector(selectTweets)
    const isLoading = useSelector(selectTweetsIsLoading)

    useEffect(() => {
        dispatch(fetchTweets())
        dispatch(fetchTags())
        dispatch(fetchActualUsers())

    }, [dispatch])

    return (
        <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classNames(classes.tweetsHeader, classes.tweetsMainHeader)}
                   variant="outlined">
                <Route path="/home/:any">
                    <BackButton/>
                </Route>
                <Route path="/home/tweet">
                    <Typography variant="h6">Твитнуть</Typography>
                </Route>
                <Route path={['/home', '/home/search']} exact>
                    <Typography variant="h6">Главная</Typography>
                </Route>
            </Paper>
            <div>
                <Paper>
                    <Route path={['/home', '/home/search']} exact>
                        <div className={classes.addForm}>
                            <AddTweetForm classes={classes}/>
                        </div>
                        <div className={classes.addFormBottomLine}/>
                    </Route>
                </Paper>
                <Route path={"/home"} exact>
                    {isLoading ?
                        <div className={classes.tweetsCentred}>
                            <CircularProgress/>
                        </div> : tweets.map(tweet =>
                            <Tweets
                                key={tweet._id}
                                _id={tweet._id}
                                images={tweet.images}
                                text={tweet.text}
                                user={tweet.user}
                                createdAt={tweet.createdAt}
                                classes={classes}
                            />)}
                </Route>
            </div>
            <Route path="/home/search">
                <div className={classes.searchBlock}>
                    <Typography variant='h6'>Страница временно недоступна</Typography>
                    <Link to='/home'>
                        <Button variant="contained"
                                color="primary"
                                fullWidth>
                            <Hidden smDown>Кликните чтобы вернуться на главную</Hidden>
                            <Hidden mdUp>
                                Главаная
                            </Hidden>
                        </Button>
                    </Link>
                </div>
            </Route>
            <Route path="/home/tweet/:id" component={CurrentTweet}/>
        </Paper>
    )
}
