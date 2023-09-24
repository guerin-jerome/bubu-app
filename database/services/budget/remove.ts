import {databaseClient} from '../../databaseClient';

export const remove = async (id: string) => {
  // TODO: improve !
  return await databaseClient
    .from('budgets')
    .delete()
    .eq('id', id)
    .then(response => {
      if (response.status !== 204) {
        throw new Error("Expenses couldn't be removed");
      }
    });
};
