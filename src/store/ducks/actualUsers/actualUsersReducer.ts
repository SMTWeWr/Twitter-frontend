import produce, {Draft} from "immer";
import {LoadingState} from "../user/userState";
import {ActualUserActions, ActualUserActionsType} from "./actualUsersAction";
import {ActualUsersState} from "./actualUsersState";

const initialUsersState: ActualUsersState = {
    items: [],
    status: LoadingState.NEVER,
}

export const actualUsersReducer = produce((draft: Draft<ActualUsersState>, action: ActualUserActions) => {
    switch (action.type) {
        case ActualUserActionsType.SET_ITEMS: {
            draft.items = action.payload
            draft.status = LoadingState.LOADED
            break
        }
        case ActualUserActionsType.FETCH_ITEMS: {
            draft.status = LoadingState.LOADING
            break
        }
        default: {
            break
        }
    }
}, initialUsersState)