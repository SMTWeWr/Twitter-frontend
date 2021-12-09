export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export type Tags = {
    _id: string
    name: string
    count: string
}

export type TagsState = {
    items: Tags[]
    loadingState: LoadingState
}

