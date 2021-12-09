import {call, put, takeEvery} from 'redux-saga/effects'
import {CurrentTweetState, LoadingState} from "./currentTweetState";
import {
    CurrentTweetActionsType,
    FetchCurrentTweetActionType,
    setCurrentTweet,
    setLoadingCurrentTweetStatus
} from "./currentTweetAction";
import {TweetsAPI} from "../../../api/tweetsApi";


export function* fetchCurrentTweetRequest({payload: tweetId}: FetchCurrentTweetActionType) {
    try {
        const data: CurrentTweetState['data'] = yield call(TweetsAPI.fetchCurrentTweet, tweetId)
        yield put(setCurrentTweet(data))
    } catch (error) {
        yield put(setLoadingCurrentTweetStatus(LoadingState.ERROR))
    }
}

export function* currentTweetSaga() {
    yield takeEvery(CurrentTweetActionsType.FETCH_DATA, fetchCurrentTweetRequest)
}