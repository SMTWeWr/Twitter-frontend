import {RootState} from "../../store";
import {ActualUsersState} from "./actualUsersState";
import {LoadingState} from "../user/userState";

export const selectActualUsersState = (state: RootState): ActualUsersState => state.actualUsers

export const selectActualUsersStatus = (state: RootState): ActualUsersState['status'] => selectActualUsersState(state).status

export const selectLoadingActualUsersStatus = (state: RootState): boolean => selectActualUsersStatus(state) === LoadingState.LOADING

export const selectActualUsersData = (state: RootState): ActualUsersState['items'] => selectActualUsersState(state).items

