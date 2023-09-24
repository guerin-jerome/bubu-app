import {TExpense} from '../../types/TExpense';
import {TAddExpenseAction} from '../../types/store/expense/actions';
import {ADD_EXPENSE_TYPE} from './constants';

export type TAddExpensePayload = {
  expense: TExpense;
  newCurrentValueOfBudget: number;
};

export const addExpense = (payload: TAddExpensePayload): TAddExpenseAction => ({
  type: ADD_EXPENSE_TYPE,
  payload,
});
