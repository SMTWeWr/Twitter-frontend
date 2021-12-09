import {Action} from "redux";
import {LoadingState, UserState} from "./userState";
import {LoginFormProps} from "../../../pages/SignIn/components/Login";
import {RegisterFormProps} from "../../../pages/SignIn/components/Register";

export enum UserActionsType {
    SET_USER_DATA = 'user/SET_USER_DATA',
    SET_LOADING_STATE = 'user/SET_LOADING_STATE',
    FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
    FETCH_SIGN_UP = 'user/FETCH_SIGN_UP',
    FETCH_SIGN_OUT = 'user/FETCH_SIGN_OUT',
    FETCH_USER_DATA = 'user/FETCH_USER_DATA',
}

export interface SetUserDataActionType extends Action<UserActionsType> {
    type: UserActionsType.SET_USER_DATA,
    payload: UserState['data'],
}

export interface SetLoadingActionType extends Action<UserActionsType> {
    type: UserActionsType.SET_LOADING_STATE,
    payload: LoadingState,
}

export interface FetchSignInRequestActionType extends Action<UserActionsType> {
    type: UserActionsType.FETCH_SIGN_IN,
    payload: LoginFormProps,
}

export interface FetchSignOutRequestActionType extends Action<UserActionsType> {
    type: UserActionsType.FETCH_SIGN_OUT,
}

export interface FetchSignUpRequestActionType extends Action<UserActionsType> {
    type: UserActionsType.FETCH_SIGN_UP,
    payload: RegisterFormProps,
}

export interface FetchUserDataRequestActionType extends Action<UserActionsType> {
    type: UserActionsType.FETCH_USER_DATA,
}

export const setUserData = (payload: UserState['data']): SetUserDataActionType => ({
    type: UserActionsType.SET_USER_DATA,
    payload
})

export const setUserLoadingStatus = (payload: LoadingState): SetLoadingActionType => ({
    type: UserActionsType.SET_LOADING_STATE,
    payload
})

export const fetchUserData = (): FetchUserDataRequestActionType => ({
    type: UserActionsType.FETCH_USER_DATA,
})

export const fetchSignInUser = (payload: LoginFormProps): FetchSignInRequestActionType => ({
    type: UserActionsType.FETCH_SIGN_IN,
    payload
})

export const fetchSignOutUser = (): FetchSignOutRequestActionType => ({
    type: UserActionsType.FETCH_SIGN_OUT,
})

export const fetchSignUpUser = (payload: RegisterFormProps): FetchSignUpRequestActionType => ({
    type: UserActionsType.FETCH_SIGN_UP,
    payload
})

export type UserActions =
    SetUserDataActionType
    | SetLoadingActionType
    | FetchSignInRequestActionType
    | FetchSignUpRequestActionType
    | FetchUserDataRequestActionType
    | FetchSignOutRequestActionType