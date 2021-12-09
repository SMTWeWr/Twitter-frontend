import {Action} from "redux";
import {LoadingState, User} from "../user/userState";

export enum ActualUserActionsType {
    SET_ITEMS = 'actualUsers/SET_ITEMS',
    FETCH_ITEMS = 'actualUsers/FETCH_ITEMS',
    SET_LOADING_STATE = 'actualUsers/FETCH_ITEMS',
}

export interface SetActualUsersAction extends Action<ActualUserActionsType> {
    type: ActualUserActionsType.SET_ITEMS,
    payload: User[],
}

export interface FetchActualUsersAction extends Action<ActualUserActionsType> {
    type: ActualUserActionsType.FETCH_ITEMS,
}

export interface SetLoadingUsersAction extends Action<ActualUserActionsType> {
    type: ActualUserActionsType.SET_LOADING_STATE,
    payload: LoadingState
}

export const setActualUser = (payload: User[]): SetActualUsersAction => ({
    type: ActualUserActionsType.SET_ITEMS,
    payload
})

export const setLoadingActualUsers = (payload: LoadingState): SetLoadingUsersAction => ({
    type: ActualUserActionsType.SET_LOADING_STATE,
    payload
})

export const fetchActualUsers = (): FetchActualUsersAction => ({
    type: ActualUserActionsType.FETCH_ITEMS,
})

export type ActualUserActions = SetActualUsersAction | FetchActualUsersAction | SetLoadingUsersAction