import {call, delay, put, takeEvery} from 'redux-saga/effects'
import {
    FetchSignInRequestActionType,
    FetchSignUpRequestActionType,
    setUserData,
    setUserLoadingStatus,
    UserActionsType
} from "./userAction";
import {LoadingState, UserState} from "./userState";
import {AuthApi} from "../../../api/authApi";

function* setUser(data: UserState['data']) {
    yield put(setUserData(data))
    window.localStorage.setItem('token', data?.token as string)
    yield delay(1000)
    yield put(setUserLoadingStatus(LoadingState.SUCCESS))
}

export function* fetchSignInRequest({payload}: FetchSignInRequestActionType) {
    try {
        yield put(setUserLoadingStatus(LoadingState.LOADING))
        const data: UserState['data'] = yield call(AuthApi.signIn, payload)
        yield setUser(data)
    } catch (error) {
        // Catch an error related to mail confirm
        // console.log(error.response.data.message)
        yield put(setUserLoadingStatus(LoadingState.ERROR))
    }
}

export function* fetchUserDataRequest() {
    try {
        yield put(setUserLoadingStatus(LoadingState.LOADING))
        const data: UserState['data'] = yield call(AuthApi.getMe)
        yield put(setUserData(data))
        yield put(setUserLoadingStatus(LoadingState.SUCCESS))
    } catch (error) {
        yield put(setUserLoadingStatus(LoadingState.ERROR))
    }
}

export function* fetchSignUpRequest({payload}: FetchSignUpRequestActionType) {
    try {
        yield put(setUserLoadingStatus(LoadingState.LOADING))
        const data: UserState['data'] = yield call(AuthApi.signUp, payload)
        yield setUser(data)
    } catch (error: any) {
        yield put(setUserLoadingStatus(LoadingState.ERROR))
    }
}

export function* userSaga() {
    yield takeEvery(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest)
    yield takeEvery(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest)
    yield takeEvery(UserActionsType.FETCH_USER_DATA, fetchUserDataRequest)
}