import {TBudget} from '../../../types/TBudget';
import {databaseClient} from '../../databaseClient';

export const create = async (budget: TBudget) => {
  // TODO: faire un sanitize sur les données
  return await databaseClient
    .from('budgets')
    .insert(budget)
    .then(response => {
      if (response.status !== 201) {
        throw new Error("Budget couldn't be created");
      }
      return budget;
    });
};
