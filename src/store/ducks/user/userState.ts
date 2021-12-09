export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
    SUCCESS = 'SUCCESS',
}

export type User = {
    _id?: string
    email: string
    fullname: string
    username: string
    password: string
    confirmHash: string
    avatarUrl?: string
    confirmed?: boolean
    about?: string
    website?: string
    token?: string
    createdAt?: number
    dob?: string
    status?: string
    city?: string,
    country?: string
}

export type UserState = {
    data: User | null
    status: LoadingState
}

