import {TBudget} from '../../types/TBudget';
import {
  TAddBudgetAction,
  TRemoveBudgetAction,
} from '../../types/store/budget/actions';
import {ADD_BUDGET_TYPE, REMOVE_BUDGET_TYPE} from './constants';

export const addBudget = (payload: TBudget): TAddBudgetAction => ({
  type: ADD_BUDGET_TYPE,
  payload,
});

export const removeBudget = (payload: TBudget): TRemoveBudgetAction => ({
  type: REMOVE_BUDGET_TYPE,
  payload,
});
