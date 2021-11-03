import { LoadingStatus } from '../../../types';
import { Tweet } from '../../tweets/contracts/state';

export interface TweetState {
  data?: Tweet;
  LoadingStatus: LoadingStatus;
}
