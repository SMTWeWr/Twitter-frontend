import produce, {Draft} from "immer";
import {LoadingState, UserState} from "./userState";
import {UserActions, UserActionsType} from "./userAction";

const initialUserState: UserState = {
    data: null,
    status: LoadingState.NEVER,
}

export const userReducer = produce((draft: Draft<UserState>, action: UserActions) => {
    switch (action.type) {
        case UserActionsType.SET_USER_DATA: {
            draft.data = action.payload
            break
        }
        case UserActionsType.SET_LOADING_STATE: {
            draft.status = action.payload
            break
        }
        case UserActionsType.FETCH_SIGN_OUT: {
            draft.status = LoadingState.LOADED
            draft.data = null
            break
        }
        default: {
            break
        }
    }
}, initialUserState)