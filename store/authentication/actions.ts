import {
  TAuthenticationSucceedAction,
  TAuthenticationSucceedPayload,
} from '../../types/store/authentication/actions';
import {AUTHENTICATION_SUCCEED_TYPE} from './constants';

export const authenticationSucceed = (
  payload: TAuthenticationSucceedPayload,
): TAuthenticationSucceedAction => ({
  type: AUTHENTICATION_SUCCEED_TYPE,
  payload,
});
