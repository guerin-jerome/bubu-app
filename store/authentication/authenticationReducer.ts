import {initialAppState} from '../../context/AppContext';
import {TAction} from '../../types/TAction';
import {TAppState} from '../../types/TAppState';
import {AUTHENTICATION_SUCCEED_TYPE, LOGOUT_TYPE} from './constants';

export const authenticationReducer = (
  state: TAppState,
  action: TAction,
): TAppState => {
  const {type} = action;

  switch (type) {
    case AUTHENTICATION_SUCCEED_TYPE:
      return {
        ...state,
        ...action.payload,
        isLogged: true,
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
