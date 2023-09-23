import {databaseClient} from '../../databaseClient';

export const remove = async (id: number) => {
  // TODO: improve !
  return await databaseClient
    .from('expenses')
    .delete()
    .eq('accountid', id)
    .then(response => {
      if (response.status === 204) {
        databaseClient
          .from('budgets')
          .delete()
          .eq('accountid', id)
          .then(responseTwo => {
            if (responseTwo.status === 204) {
              databaseClient
                .from('accounts')
                .delete()
                .eq('id', id)
                .then(responseThree => {
                  if (responseThree.status !== 204) {
                    throw new Error("Expenses couldn't be removed");
                  }
                });
            } else {
              throw new Error("Expenses couldn't be removed");
            }
          });
      } else {
        throw new Error("Expenses couldn't be removed");
      }
    });
};
