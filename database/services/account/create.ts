import {TAccount} from '../../../types/TAccount';
import {databaseClient} from '../../databaseClient';

export const create = async (account: TAccount) => {
  // TODO: faire un sanitize sur les données
  return await databaseClient
    .from('accounts')
    .insert(account)
    .then(response => {
      if (response.status !== 201) {
        throw new Error("Account couldn't be created");
      }
      return account;
    });
};
