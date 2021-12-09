import {AddFormState, LoadingState, TweetState} from "./tweetState";
import produce, {Draft} from "immer";
import {TweetsActions, TweetsActionsType} from "./tweetsAction";

const initialTweetsState: TweetState = {
    items: [],
    text: '',
    loadingState: LoadingState.NEVER,
    addFormState: AddFormState.NEVER
}

export const tweetsReducer = produce((draft: Draft<TweetState>, action: TweetsActions) => {
    switch (action.type) {
        case TweetsActionsType.SET_TWEETS: {
            draft.items = action.payload
            draft.loadingState = LoadingState.LOADED
            break
        }
        case TweetsActionsType.FETCH_TWEETS: {
            draft.items = []
            draft.loadingState = LoadingState.LOADING
            break
        }
        case TweetsActionsType.FETCH_ADD_TWEET: {
            draft.addFormState = AddFormState.LOADING
            break
        }
        case TweetsActionsType.REMOVE_TWEET: {
            draft.items = draft.items.filter(obj => obj._id !== action.payload)
            break
        }
        case TweetsActionsType.SET_TEXT: {
            draft.text = action.payload
            break
        }
        case TweetsActionsType.SET_ADD_FORM_STATE: {
            draft.addFormState = action.payload
            break
        }
        case TweetsActionsType.ADD_TWEET: {
            draft.items.splice(0, 0, action.payload)
            draft.addFormState = AddFormState.NEVER
            break
        }
        case TweetsActionsType.SET_LOADING_STATUS: {
            draft.loadingState = action.payload
            break
        }
        default: {
            break
        }
    }
}, initialTweetsState)