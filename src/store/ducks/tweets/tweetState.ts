export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export enum AddFormState {
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export type Tweet = {
    _id: string
    text: string
    createdAt: string
    images?: string[]
    user: {
        fullname: string
        username: string
        avatarUrl: string
        _id: string
    }
}

export type TweetState = {
    items: Tweet[]
    text: string
    loadingState: LoadingState
    addFormState: AddFormState
}

