import {initialAppState} from '../../context/AppContext';
import {TAppState} from '../../types/TAppState';
import {TAccountActions} from '../../types/store/account/actions';
import {
  ADD_ACCOUNT_TYPE,
  REMOVE_ACCOUNT_TYPE,
  SELECT_ACCOUNT_TYPE,
} from './constants';

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
    case ADD_ACCOUNT_TYPE:
      return {
        ...state,
        accounts: [...state.accounts, payload],
      };
    case REMOVE_ACCOUNT_TYPE:
      return {
        ...state,
        accounts: state.accounts.filter(account => account.id !== payload),
        activeView: 'home',
      };
    default:
      console.error(`Unknown action in accountReducer, with type: ${type}`);
      return initialAppState;
  }
};
