import {TBudget} from '../../TBudget';

export type TAddBudgetAction = {
  type: 'budget.add.type';
  payload: TBudget;
};

export type TBudgetActions = TAddBudgetAction;
