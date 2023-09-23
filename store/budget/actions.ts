import {TBudget} from '../../types/TBudget';
import {TAddBudgetAction} from '../../types/store/budget/actions';
import {ADD_BUDGET_TYPE} from './constants';

export const addBudget = (payload: TBudget): TAddBudgetAction => ({
  type: ADD_BUDGET_TYPE,
  payload,
});
