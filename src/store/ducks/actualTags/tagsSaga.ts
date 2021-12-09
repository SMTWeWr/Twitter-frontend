import {call, put, takeEvery} from 'redux-saga/effects'
import {LoadingState, TagsState} from "./tagsState";
import {setLoadingTagsStatus, setTags, TagsActionsType} from "./tagsAction";
import {TagsAPI} from "../../../api/tagsApi";

export function* fetchTweetsRequest() {
    try {
        const items: TagsState['items'] = yield call(TagsAPI.fetchTags)
        yield put(setTags(items))
    } catch (error) {
        yield put(setLoadingTagsStatus(LoadingState.ERROR))
    }
}

export function* tagsSaga() {
    yield takeEvery(TagsActionsType.FETCH_TAGS, fetchTweetsRequest)
}