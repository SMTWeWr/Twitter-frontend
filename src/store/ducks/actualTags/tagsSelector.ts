import {RootState} from "../../store";
import {LoadingState, TagsState} from "./tagsState";

export const selectTags = (state: RootState): TagsState['items'] => state.tags.items

export const selectLoadingTagsState = (state: RootState): TagsState['loadingState'] => state.tags.loadingState

export const selectTagsIsLoading = (state: RootState): boolean => selectLoadingTagsState(state) === LoadingState.LOADING