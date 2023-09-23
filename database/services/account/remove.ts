import {databaseClient} from '../../databaseClient';

export const remove = async (id: number) => {
  return await databaseClient
    .from('accounts')
    .delete()
    .eq('id', id)
    .then(response => {
      if (response.status !== 204) {
        throw new Error("Account couldn't be removed");
      }
    });
};
