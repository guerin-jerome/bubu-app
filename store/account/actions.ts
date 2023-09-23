import {TAccount} from '../../types/TAccount';
import {
  TAddAccountAction,
  TSelectAccountAction,
  TSelectAccountPayload,
} from '../../types/store/account/actions';
import {ADD_ACCOUNT_TYPE, SELECT_ACCOUNT_TYPE} from './constants';

export const selectAccount = (
  payload: TSelectAccountPayload,
): TSelectAccountAction => ({
  type: SELECT_ACCOUNT_TYPE,
  payload,
});

export const addAccount = (payload: TAccount): TAddAccountAction => ({
  type: ADD_ACCOUNT_TYPE,
  payload,
});
