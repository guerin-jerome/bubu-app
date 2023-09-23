import {initialAppState} from '../context/AppContext';
import {TAction} from '../types/TAction';
import {TAppState} from '../types/TAppState';
import {TAccountActions} from '../types/store/account/actions';
import {TAuthenticationActions} from '../types/store/authentication/actions';
import {TViewsActions} from '../types/store/views/actions';
import {accountReducer} from './account/accountReducer';
import {ACCOUNT_ACTION_PREFIX} from './account/constants';
import {authenticationReducer} from './authentication/authenticationReducer';
import {AUTHENTICATION_ACTION_PREFIX} from './authentication/constants';
import {VIEWS_ACTION_PREFIX} from './views/constants';
import {viewsReducer} from './views/viewsReducer';

export const appReducer = (state: TAppState, action: TAction): TAppState => {
  const {type} = action;

  if (type.includes(AUTHENTICATION_ACTION_PREFIX)) {
    return authenticationReducer(state, action as TAuthenticationActions);
  }

  if (type.includes(ACCOUNT_ACTION_PREFIX)) {
    return accountReducer(state, action as TAccountActions);
  }

  if (type.includes(VIEWS_ACTION_PREFIX)) {
    return viewsReducer(state, action as TViewsActions);
  }

  console.error(`Unknown action in appReducer, with type: ${type}`);
  return initialAppState;
};
