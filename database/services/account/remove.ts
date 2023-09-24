import {databaseClient} from '../../databaseClient';

export const remove = async (id: string) => {
  return await databaseClient
    .from('accounts')
    .delete()
    .eq('id', id)
    .then(response => {
      if (response.status !== 204) {
        throw new Error("Expenses couldn't be removed");
      }
    });
};
