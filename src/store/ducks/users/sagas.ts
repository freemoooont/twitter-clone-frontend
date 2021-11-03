import { call, put, takeLatest } from 'redux-saga/effects';
import { TagsApi } from '../../../services/api/tagsApi';
import { LoadingStatus } from '../../types';

export function* fetchUsersRequest() {
  // try {
  //   const items = yield call(TagsApi.fetchTags);
  //   yield put(setTags(items));
  // } catch (error) {
  //   yield put(setTagsLoadingStatus(LoadingStatus.ERROR));
  // }
}

export function* usersSaga() {
  // yield takeLatest(TagsActionsType.FETCH_TAGS, fetchTagsRequest);
}
