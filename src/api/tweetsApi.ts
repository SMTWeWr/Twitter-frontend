import {TweetState} from "../store/ducks/tweets/tweetState";
import {CurrentTweetState} from "../store/ducks/currentTweet/currentTweetState";
import {instance} from "../core/axios";

type Response<T> = {
    status: string
    data: T
}

export const TweetsAPI = {
    async fetchTweets(userId?: string): Promise<TweetState['items']> {
        const { data } = await instance.get<Response<TweetState['items']>>(userId? `/tweets/user/${userId}` : '/tweets')
        return data.data
    },
    async fetchCurrentTweet(id: string): Promise<CurrentTweetState['data']> {
        const { data } = await instance.get<Response<CurrentTweetState['data']>>('/tweets/' + id)
        return data.data
    },
    async addTweet(payload: {text: string, images: string[]}): Promise<CurrentTweetState['data']> {
        const { data } = await instance.post<Response<CurrentTweetState['data']>>('/tweets', payload)
        return data.data
    },
    removeTweet: (id: string): Promise<void> => instance.delete('/tweets/' + id),
}