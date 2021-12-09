import {Tweet} from "../tweets/tweetState";

export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export type CurrentTweetState = {
    data: Tweet | null
    loadingState: LoadingState
}

