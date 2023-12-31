import {initialAppState} from '../context/AppContext';
import {TAction} from '../types/TAction';
import {TAppState} from '../types/TAppState';
import {TAccountActions} from '../types/store/account/actions';
import {TAuthenticationActions} from '../types/store/authentication/actions';
import {TBudgetActions} from '../types/store/budget/actions';
import {TExpenseActions} from '../types/store/expense/actions';
import {TViewsActions} from '../types/store/views/actions';
import {accountReducer} from './account/accountReducer';
import {ACCOUNT_ACTION_PREFIX} from './account/constants';
import {authenticationReducer} from './authentication/authenticationReducer';
import {AUTHENTICATION_ACTION_PREFIX} from './authentication/constants';
import {budgetReducer} from './budget/budgetReducer';
import {BUDGET_ACTION_PREFIX} from './budget/constants';
import {EXPENSE_ACTION_PREFIX} from './expense/constants';
import {expenseReducer} from './expense/expenseReducer';
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

  if (type.includes(BUDGET_ACTION_PREFIX)) {
    return budgetReducer(state, action as TBudgetActions);
  }

  if (type.includes(EXPENSE_ACTION_PREFIX)) {
    return expenseReducer(state, action as TExpenseActions);
  }

  console.error(`Unknown action in appReducer, with type: ${type}`);
  return initialAppState;
};
