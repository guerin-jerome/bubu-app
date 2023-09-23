import {
  TAuthenticationSucceedAction,
  TAuthenticationSucceedPayload,
  TLogoutAction,
} from '../../types/store/authentication/actions';
import {AUTHENTICATION_SUCCEED_TYPE, LOGOUT_TYPE} from './constants';

export const authenticationSucceed = (
  payload: TAuthenticationSucceedPayload,
): TAuthenticationSucceedAction => ({
  type: AUTHENTICATION_SUCCEED_TYPE,
  payload,
});

export const logout = (): TLogoutAction => ({
  type: LOGOUT_TYPE,
});
