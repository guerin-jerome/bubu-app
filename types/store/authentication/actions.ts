import {TAccount} from '../../TAccount';
import {TBudget} from '../../TBudget';
import {TExpense} from '../../TExpense';
import {TUser} from '../../TUser';

export type TAuthenticationSucceedPayload = {
  user: TUser;
  accounts: TAccount[];
  budgets: TBudget[];
  expenses: TExpense[];
};

export type TAuthenticationSucceedAction = {
  type: 'authentication.succeed.type';
  payload: TAuthenticationSucceedPayload;
};

export type TAuthenticationSucceedActions = TAuthenticationSucceedAction;
