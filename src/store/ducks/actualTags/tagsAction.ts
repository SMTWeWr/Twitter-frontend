import {Action} from "redux";
import {LoadingState, TagsState} from "./tagsState";

export enum TagsActionsType {
    SET_TAGS = 'tags/SET_TAGS',
    FETCH_TAGS = 'tags/FETCH_TAGS',
    SET_LOADING_STATUS = 'tags/SET_LOADING_STATUS',
}

export interface SetTagsActionType extends Action<TagsActionsType> {
    type: TagsActionsType.SET_TAGS,
    payload: TagsState['items'],
}

export interface FetchTagsActionType extends Action<TagsActionsType> {
    type: TagsActionsType.FETCH_TAGS,
}

export interface SetLoadingTagsActionType extends Action<TagsActionsType> {
    type: TagsActionsType.SET_LOADING_STATUS,
    payload: LoadingState,
}

export const setTags = (payload: TagsState['items']): SetTagsActionType => ({
    type: TagsActionsType.SET_TAGS,
    payload
})

export const setLoadingTagsStatus = (payload: LoadingState): SetLoadingTagsActionType => ({
    type: TagsActionsType.SET_LOADING_STATUS,
    payload
})

export const fetchTags = (): FetchTagsActionType => ({
    type: TagsActionsType.FETCH_TAGS,
})

export type TagsActions = SetTagsActionType | FetchTagsActionType | SetLoadingTagsActionType