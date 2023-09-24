import {initialAppState} from '../../context/AppContext';
import {TAppState} from '../../types/TAppState';
import {TExpenseActions} from '../../types/store/expense/actions';
import {ADD_EXPENSE_TYPE} from './constants';

export const expenseReducer = (
  state: TAppState,
  action: TExpenseActions,
): TAppState => {
  const {type, payload} = action;

  switch (type) {
    case ADD_EXPENSE_TYPE:
      const budgetsUpdated = state.budgets.map(budget => {
        if (budget.id === payload.expense.budgetid) {
          return {...budget, current: payload.newCurrentValueOfBudget};
        }
        return budget;
      });

      return {
        ...state,
        budgets: budgetsUpdated,
        expenses: [...state.expenses, payload.expense],
      };
    default:
      console.error(`Unknown action in expenseReducer, with type: ${type}`);
      return initialAppState;
  }
};
