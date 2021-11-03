import { axios } from '../../core/axios';
import { Tweet } from '../../store/ducks/tweets/contracts/state';

interface Response<T> {
  status: string;
  data: T;
}

export const TweetsApi = {
  async fetchTweets(userId?: string): Promise<Tweet[]> {
    const { data } = await axios.get<Response<Tweet[]>>(
      userId ? `/tweets/user/${userId}` : '/tweets',
    );
    return data.data;
  },
  async fetchTweetData(id: string): Promise<Tweet> {
    const { data } = await axios.get<Response<Tweet>>('/tweets/' + id);
    return data.data;
  },
  async addTweet(payload: { text: string; images: string[] }): Promise<Tweet> {
    const { data } = await axios.post<Response<Tweet>>('/tweets', payload);
    return data.data;
  },
  removeTweet: (id: string): Promise<void> => axios.delete('/tweets/' + id),
};
