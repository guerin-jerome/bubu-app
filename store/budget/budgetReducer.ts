import {initialAppState} from '../../context/AppContext';
import {TAppState} from '../../types/TAppState';
import {TBudgetActions} from '../../types/store/budget/actions';
import {ADD_BUDGET_TYPE} from './constants';

export const budgetReducer = (
  state: TAppState,
  action: TBudgetActions,
): TAppState => {
  const {type, payload} = action;

  switch (type) {
    case ADD_BUDGET_TYPE:
      return {
        ...state,
        budgets: [...state.budgets, payload],
      };
    default:
      console.error(`Unknown action in budgetReducer, with type: ${type}`);
      return initialAppState;
  }
};
