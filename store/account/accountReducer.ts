import {initialAppState} from '../../context/AppContext';
import {TAppState} from '../../types/TAppState';
import {TAccountActions} from '../../types/store/account/actions';
import {SELECT_ACCOUNT_TYPE} from './constants';

export const accountReducer = (
  state: TAppState,
  action: TAccountActions,
): TAppState => {
  const {type, payload} = action;

  switch (type) {
    case SELECT_ACCOUNT_TYPE:
      return {
        ...state,
        activeView: `account-${payload.accountid}`,
      };
    default:
      console.error(`Unknown action in accountReducer, with type: ${type}`);
      return initialAppState;
  }
};
