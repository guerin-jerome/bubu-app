import {TBudget} from '../../../types/TBudget';
import {databaseClient} from '../../databaseClient';

export const remove = async (budget: TBudget) => {
  // TODO: improve !
  return await databaseClient
    .from('expenses')
    .delete()
    .eq('budgetid', budget.id)
    .then(response => {
      if (response.status === 204) {
        databaseClient
          .from('budgets')
          .delete()
          .eq('id', budget.id)
          .then(responseTwo => {
            if (responseTwo.status !== 204) {
              throw new Error("Budget couldn't be removed");
            }
          });
      } else {
        throw new Error("Expenses couldn't be removed");
      }
    });
};
