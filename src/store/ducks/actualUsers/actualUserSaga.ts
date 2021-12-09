import {call, put, takeEvery} from 'redux-saga/effects'
import {LoadingState, User} from "../user/userState";
import {AuthApi} from "../../../api/authApi";
import {ActualUserActionsType, setActualUser, setLoadingActualUsers} from "./actualUsersAction";

export function* fetchAllUserRequest() {
    try {
        const items: User[] = yield call(AuthApi.getAllUser)
        yield put(setActualUser(items))
    } catch (error) {
        yield put(setLoadingActualUsers(LoadingState.ERROR))
    }
}

export function* actualUserSaga() {
    yield takeEvery(ActualUserActionsType.FETCH_ITEMS, fetchAllUserRequest)
}