import {TAccount} from './TAccount';
import {TBudget} from './TBudget';
import {TExpense} from './TExpense';
import {TUser} from './TUser';

export type TAppState = {
  isLogged: boolean;
  user: TUser | null;
  activeView: string | null;
  accounts: TAccount[];
  budgets: TBudget[];
  expenses: TExpense[];
};
