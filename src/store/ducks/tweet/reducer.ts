import produce, { Draft } from 'immer';
import { LoadingStatus } from '../../types';
import { TweetActions } from './actionCreators';
import { TweetActionsType } from './contracts/actionTypes';
import { TweetState } from './contracts/state';

const initialTweetState: TweetState = {
  data: undefined,
  LoadingStatus: LoadingStatus.NEVER,
};

export const tweetReducer = produce((draft: Draft<TweetState>, action: TweetActions) => {
  switch (action.type) {
    case TweetActionsType.SET_TWEET_DATA:
      draft.data = action.payload;
      draft.LoadingStatus = LoadingStatus.LOADED;
      break;

    case TweetActionsType.FETCH_TWEET_DATA:
      draft.data = undefined;
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;

    case TweetActionsType.SET_LOADING_STATE:
      draft.LoadingStatus = action.payload;
      break;

    default:
      break;
  }
}, initialTweetState);
