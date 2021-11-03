import produce, { Draft } from 'immer';
import { LoadingStatus } from '../../types';
import { UserActions } from './actionCreators';
import { UserActionsType } from './contracts/actionTypes';
import { UserState } from './contracts/state';

const initialUserState: UserState = {
  data: undefined,
  status: LoadingStatus.NEVER,
};

export const userReducer = produce((draft: Draft<UserState>, action: UserActions) => {
  switch (action.type) {
    case UserActionsType.SET_USER_DATA:
      draft.data = action.payload;
      draft.status = LoadingStatus.SUCCESS;
      break;

    case UserActionsType.SET_LOADING_STATE:
      draft.status = action.payload;
      break;

    case UserActionsType.SIGN_OUT:
      draft.status = LoadingStatus.LOADED;
      draft.data = undefined;
      break;

    default:
      break;
  }
}, initialUserState);
