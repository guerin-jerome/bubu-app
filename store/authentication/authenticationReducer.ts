import {initialAppState} from '../../context/AppContext';
import {TAction} from '../../types/TAction';
import {TAppState} from '../../types/TAppState';
import {AUTHENTICATION_SUCCEED_TYPE} from './constants';

export const authenticationReducer = (
  state: TAppState,
  action: TAction,
): TAppState => {
  const {type, payload} = action;

  switch (type) {
    case AUTHENTICATION_SUCCEED_TYPE:
      return {
        ...state,
        ...payload,
        isLogged: true,
      };
    default:
      console.error(
        `Unknown action in authenticationReducer, with type: ${type}`,
      );
      return initialAppState;
  }
};
