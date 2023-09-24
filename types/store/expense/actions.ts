import {TAddExpensePayload} from '../../../store/expense/actions';
import {TExpense} from '../../TExpense';

export type TAddExpenseAction = {
  type: 'expense.add.type';
  payload: TAddExpensePayload;
};

export type TExpenseActions = TAddExpenseAction;
