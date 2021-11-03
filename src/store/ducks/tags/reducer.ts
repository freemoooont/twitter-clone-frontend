import produce, { Draft } from 'immer';
import { LoadingStatus } from '../../types';
import { TagsActions, TagsActionsType } from './actionCreators';
import { TagsState } from './contracts/state';

const initialTagsState: TagsState = {
  items: [],
  LoadingStatus: LoadingStatus.NEVER,
};

export const tagsReducer = produce((draft: Draft<TagsState>, action: TagsActions) => {
  switch (action.type) {
    case TagsActionsType.SET_TAGS:
      draft.items = action.payload;
      draft.LoadingStatus = LoadingStatus.LOADED;
      break;

    case TagsActionsType.FETCH_TAGS:
      draft.items = [];
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;

    case TagsActionsType.SET_LOADING_STATE:
      draft.LoadingStatus = action.payload;
      break;

    default:
      break;
  }
}, initialTagsState);
