import {AddFormState, LoadingState, Tweet, TweetState} from "./tweetState";
import {Action} from "redux";

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATUS = 'tweets/SET_LOADING_STATUS',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
    ADD_TWEET = 'tweets/ADD_TWEET',
    REMOVE_TWEET = 'tweets/REMOVE_TWEET',
    SET_ADD_FORM_STATE = 'tweets/SET_ADD_FORM_STATE',
    SET_TEXT = 'tweets/SET_TEXT',
}

export interface SetTweetsActionType extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEETS,
    payload: TweetState['items'],
}

export interface FetchTweetsActionType extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_TWEETS,
}

export interface SetLoadingTweetsActionType extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_LOADING_STATUS,
    payload: LoadingState,
}

export interface FetchAddTweetActionType extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload: { text: string, images: string[] },
}

export interface AddTweetsActionType extends Action<TweetsActionsType> {
    type: TweetsActionsType.ADD_TWEET,
    payload: Tweet,
}

export interface RemoveTweetsActionType extends Action<TweetsActionsType> {
    type: TweetsActionsType.REMOVE_TWEET,
    payload: string,
}

export interface SetAddFormStateActionType extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_ADD_FORM_STATE,
    payload: AddFormState,
}

export interface SetTextActionType extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TEXT,
    payload: string,
}

export const setTweets = (payload: TweetState['items']): SetTweetsActionType => ({
    type: TweetsActionsType.SET_TWEETS,
    payload
})

export const fetchAddTweet = (payload: { text: string, images: string[] }): FetchAddTweetActionType => ({
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload
})

export const addTweet = (payload: Tweet): AddTweetsActionType => ({
    type: TweetsActionsType.ADD_TWEET,
    payload
})

export const removeTweet = (payload: string): RemoveTweetsActionType => ({
    type: TweetsActionsType.REMOVE_TWEET,
    payload
})

export const setText = (payload: string): SetTextActionType => ({
    type: TweetsActionsType.SET_TEXT,
    payload
})

export const setLoadingTweetsStatus = (payload: LoadingState): SetLoadingTweetsActionType => ({
    type: TweetsActionsType.SET_LOADING_STATUS,
    payload
})

export const setAddFormStateStatus = (payload: AddFormState): SetAddFormStateActionType => ({
    type: TweetsActionsType.SET_ADD_FORM_STATE,
    payload
})

export const fetchTweets = (): FetchTweetsActionType => ({
    type: TweetsActionsType.FETCH_TWEETS,
})

export type TweetsActions =
    SetTweetsActionType
    | FetchTweetsActionType
    | SetLoadingTweetsActionType
    | FetchAddTweetActionType
    | AddTweetsActionType
    | SetAddFormStateActionType
    | SetTextActionType
    | RemoveTweetsActionType