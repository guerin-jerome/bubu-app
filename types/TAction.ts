import {TAccountActions} from './store/account/actions';
import {TAuthenticationActions} from './store/authentication/actions';
import {TBudgetActions} from './store/budget/actions';
import {TExpenseActions} from './store/expense/actions';
import {TViewsActions} from './store/views/actions';

export type TAction =
  | TAuthenticationActions
  | TAccountActions
  | TViewsActions
  | TBudgetActions
  | TExpenseActions;
