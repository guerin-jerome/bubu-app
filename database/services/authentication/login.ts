import {databaseClient} from '../../databaseClient';

export const login = async (email: string) => {
  // TODO: faire un sanitize sur email
  const user = await databaseClient
    .from('users')
    .select()
    .eq('email', email)
    .then(response => {
      if (
        response.status === 200 &&
        response.data &&
        response.data.length > 0
      ) {
        return response.data[0];
      }
      // TODO: Throw error si server KO
    });

  // TODO: Throw error si on a pas de user

  const allInformationsRequest = Promise.all([
    databaseClient.from('accounts').select().eq('userid', user.id),
    databaseClient.from('budgets').select().eq('userid', user.id),
    databaseClient.from('expenses').select().eq('userid', user.id),
  ]);

  // TODO: gestion d'erreur + vérification présence des réponses

  return allInformationsRequest.then(responses => ({
    user,
    accounts: responses[0].data,
    budgets: responses[1].data,
    expenses: responses[2].data,
  }));
};
