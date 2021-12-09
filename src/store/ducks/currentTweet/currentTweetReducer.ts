import produce, {Draft} from "immer";
import {CurrentTweetState, LoadingState} from "./currentTweetState";
import {CurrentTweetActions, CurrentTweetActionsType} from "./currentTweetAction";

const initialCurrentTweetState: CurrentTweetState = {
    data: null,
    loadingState: LoadingState.NEVER
}

export const currentTweetReducer = produce((draft: Draft<CurrentTweetState>, action: CurrentTweetActions) => {
    switch (action.type) {
        case CurrentTweetActionsType.SET_DATA: {
            draft.data = action.payload
            draft.loadingState = LoadingState.LOADED
            break
        }
        case CurrentTweetActionsType.FETCH_DATA: {
            draft.data = null
            draft.loadingState = LoadingState.LOADING
            break
        }
        case CurrentTweetActionsType.SET_LOADING_STATUS: {
            draft.loadingState = action.payload
            break
        }
        default: {
            break
        }
    }
}, initialCurrentTweetState)