import {RootState} from "../../store";
import {LoadingState, TweetState} from "./tweetState";

export const selectTweets = (state: RootState): TweetState['items'] => state.tweets.items

export const selectLoadingTweetsState = (state: RootState): TweetState['loadingState'] => state.tweets.loadingState

export const selectAddFormState = (state: RootState): TweetState['addFormState'] => state.tweets.addFormState

export const getSetText = (state: RootState): TweetState['text'] => state.tweets.text

export const selectTweetsIsLoading = (state: RootState): boolean => selectLoadingTweetsState(state) === LoadingState.LOADING