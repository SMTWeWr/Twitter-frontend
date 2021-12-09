import {call, put, takeEvery} from 'redux-saga/effects'
import {
    addTweet,
    FetchAddTweetActionType,
    RemoveTweetsActionType,
    setAddFormStateStatus,
    setLoadingTweetsStatus,
    setText,
    setTweets,
    TweetsActionsType
} from "./tweetsAction";
import {TweetsAPI} from "../../../api/tweetsApi";
import {AddFormState, LoadingState, Tweet, TweetState} from "./tweetState";

export function* fetchTweetsRequest() {
    try {
        const pathname = window.location.pathname
        const userId = pathname.includes('/user') ? pathname.split('/').pop() : undefined
        const items: TweetState['items'] = yield call(TweetsAPI.fetchTweets, userId)
        yield put(setTweets(items))
    } catch (error) {
        yield put(setLoadingTweetsStatus(LoadingState.ERROR))
    }
}

export function* fetchAddTweetRequest({ payload }: FetchAddTweetActionType) {
    try {
        const item: Tweet = yield call(TweetsAPI.addTweet, payload)
        yield put(addTweet(item))
        yield put(setText(''))
    } catch (error) {
        yield put(setAddFormStateStatus(AddFormState.ERROR))
    }
}

export function* fetchRemoveTweetRequest({ payload }: RemoveTweetsActionType) {
    try {
        yield call(TweetsAPI.removeTweet, payload)
    } catch (error) {
        yield put(setAddFormStateStatus(AddFormState.ERROR))
    }
}

export function* tweetsSaga() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET,fetchAddTweetRequest)
    yield takeEvery(TweetsActionsType.REMOVE_TWEET, fetchRemoveTweetRequest)
}