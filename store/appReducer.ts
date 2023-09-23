import {initialAppState} from '../context/AppContext';
import {TAction} from '../types/TAction';
import {TAppState} from '../types/TAppState';
import {authenticationReducer} from './authentication/authenticationReducer';
import {AUTHENTICATION_ACTION_PREFIX} from './authentication/constants';

export const appReducer = (state: TAppState, action: TAction): TAppState => {
  const {type} = action;

  if (type.includes(AUTHENTICATION_ACTION_PREFIX)) {
    return authenticationReducer(state, action);
  }

  console.error(`Unknown action in appReducer, with type: ${type}`);
  return initialAppState;
};
