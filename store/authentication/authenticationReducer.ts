import {initialAppState} from '../../context/AppContext';
import {TAppState} from '../../types/TAppState';
import {TAuthenticationActions} from '../../types/store/authentication/actions';
import {AUTHENTICATION_SUCCEED_TYPE, LOGOUT_TYPE} from './constants';

export const authenticationReducer = (
  state: TAppState,
  action: TAuthenticationActions,
): TAppState => {
  const {type} = action;

  switch (type) {
    case AUTHENTICATION_SUCCEED_TYPE:
      return {
        ...state,
        ...action.payload,
        isLogged: true,
        activeView: 'home',
      };
    case LOGOUT_TYPE:
      return initialAppState;
    default:
      console.error(
        `Unknown action in authenticationReducer, with type: ${type}`,
      );
      return initialAppState;
  }
};
