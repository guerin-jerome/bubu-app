import {TAction} from '../types/TAction';
import {TAppState} from '../types/TAppState';
import {AUTHENTICATION_ACTION_PREFIX} from './authentication/constants';

export const appReducer = (state: TAppState, action: TAction): TAppState => {
  const {type} = action;

  if (type.includes(AUTHENTICATION_ACTION_PREFIX)) {
    return state;
  }

  throw new Error(`Unknown action in appReducer, with type: ${type}`);
};
