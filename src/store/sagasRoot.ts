import { all } from "redux-saga/effects";
import {tweetsSaga} from "./ducks/tweets/tweetsSaga";
import {tagsSaga} from "./ducks/actualTags/tagsSaga";
import {currentTweetSaga} from "./ducks/currentTweet/currentTweetSaga";
import {userSaga} from "./ducks/user/userSaga";
import {actualUserSaga} from "./ducks/actualUsers/actualUserSaga";

export default function* rootSaga() {
    yield all([
        tweetsSaga(),
        tagsSaga(),
        currentTweetSaga(),
        userSaga(),
        actualUserSaga()
    ])
}