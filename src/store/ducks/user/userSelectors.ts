import {RootState} from "../../store";
import {LoadingState, UserState} from "./userState";

export const selectUserState = (state: RootState): UserState => state.user

export const selectUserStatus = (state: RootState): UserState['status'] => selectUserState(state).status

export const selectUserData = (state: RootState): UserState['data']  => selectUserState(state).data

export const selectUserId = (state: RootState): string | undefined => selectUserState(state).data?._id

export const selectUserIsAuthData = (state: RootState): boolean => !!selectUserState(state).data

export const selectUserIsLoading = (state: RootState): boolean => selectUserState(state).status === LoadingState.LOADING

