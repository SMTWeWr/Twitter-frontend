import {Action} from "redux";
import {Tweet} from "../tweets/tweetState";
import {CurrentTweetState, LoadingState} from "./currentTweetState";

export enum CurrentTweetActionsType {
    SET_DATA = 'currentTweet/SET_DATA',
    FETCH_DATA = 'currentTweet/FETCH_DATA',
    SET_LOADING_STATUS = 'currentTweet/SET_LOADING_STATUS',
}

export interface SetCurrentTweetActionType extends Action<CurrentTweetActionsType> {
    type: CurrentTweetActionsType.SET_DATA,
    payload: Tweet | null,
}

export interface FetchCurrentTweetActionType extends Action<CurrentTweetActionsType> {
    type: CurrentTweetActionsType.FETCH_DATA,
    payload: string
}

export interface SetLoadingCurrentTweetActionType extends Action<CurrentTweetActionsType> {
    type: CurrentTweetActionsType.SET_LOADING_STATUS,
    payload: LoadingState,
}

export const setCurrentTweet = (payload: CurrentTweetState['data']): SetCurrentTweetActionType => ({
    type: CurrentTweetActionsType.SET_DATA,
    payload
})

export const setLoadingCurrentTweetStatus = (payload: LoadingState): SetLoadingCurrentTweetActionType => ({
    type: CurrentTweetActionsType.SET_LOADING_STATUS,
    payload
})

export const fetchCurrentTweet = (payload: string): FetchCurrentTweetActionType => ({
    type: CurrentTweetActionsType.FETCH_DATA,
    payload
})

export type CurrentTweetActions =
    SetCurrentTweetActionType
    | FetchCurrentTweetActionType
    | SetLoadingCurrentTweetActionType