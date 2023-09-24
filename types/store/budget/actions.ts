import {TBudget} from '../../TBudget';

export type TAddBudgetAction = {
  type: 'budget.add.type';
  payload: TBudget;
};

export type TRemoveBudgetAction = {
  type: 'budget.remove.type';
  payload: TBudget;
};

export type TBudgetActions = TAddBudgetAction | TRemoveBudgetAction;
