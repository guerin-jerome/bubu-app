import {
  TSelectAccountAction,
  TSelectAccountPayload,
} from '../../types/store/account/actions';
import {SELECT_ACCOUNT_TYPE} from './constants';

export const selectAccount = (
  payload: TSelectAccountPayload,
): TSelectAccountAction => ({
  type: SELECT_ACCOUNT_TYPE,
  payload,
});
