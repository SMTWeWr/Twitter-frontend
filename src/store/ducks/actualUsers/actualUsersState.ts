import {LoadingState, User} from "../user/userState";

export type ActualUsersState = {
    items: User[],
    status: LoadingState
}