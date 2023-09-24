import {TExpense} from '../../../types/TExpense';
import {databaseClient} from '../../databaseClient';

export const create = async (expense: TExpense, newValue: number) => {
  // TODO: faire un sanitize sur les données
  return await databaseClient
    .from('expenses')
    .insert(expense)
    .then(response => {
      if (response.status !== 201) {
        throw new Error("Expense couldn't be created");
      }

      return databaseClient
        .from('budgets')
        .update({current: newValue})
        .eq('id', expense.budgetid)
        .then(responseTwo => {
          if (responseTwo.status !== 204) {
            throw new Error("Budget couldn't be updated");
          }

          return expense;
        });
    });
};
