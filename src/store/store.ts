import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {tweetsReducer} from "./ducks/tweets/tweetsReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagasRoot";
import {TweetState} from "./ducks/tweets/tweetState";
import {TagsState} from "./ducks/actualTags/tagsState";
import {tagsReducer} from "./ducks/actualTags/tagsReducer";
import {CurrentTweetState} from "./ducks/currentTweet/currentTweetState";
import {currentTweetReducer} from "./ducks/currentTweet/currentTweetReducer";
import {UserState} from "./ducks/user/userState";
import {userReducer} from "./ducks/user/userReducer";
import {actualUsersReducer} from "./ducks/actualUsers/actualUsersReducer";
import {ActualUsersState} from "./ducks/actualUsers/actualUsersState";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose,
    }
}
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

let rootReducer = combineReducers({
    tweets: tweetsReducer,
    tags: tagsReducer,
    currentTweet: currentTweetReducer,
    user: userReducer,
    actualUsers: actualUsersReducer
})

const sagaMiddleware = createSagaMiddleware()

export type RootState = {
    tweets: TweetState
    tags: TagsState
    currentTweet: CurrentTweetState
    user: UserState
    actualUsers: ActualUsersState
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
