import {RootState} from "../../store";
import {CurrentTweetState, LoadingState} from "./currentTweetState";

export const selectCurrentTweet = (state: RootState): CurrentTweetState['data'] => state.currentTweet.data

export const selectLoadingCurrentTweetState = (state: RootState): CurrentTweetState['loadingState'] => state.currentTweet.loadingState

export const selectCurrentTweetIsLoading = (state: RootState): boolean => selectLoadingCurrentTweetState(state) === LoadingState.LOADING