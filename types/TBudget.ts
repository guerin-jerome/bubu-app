export type TBudget = {
  id: number;
  accountId: number;
  name: string;
  type: 'saved' | 'variable' | 'fixed';
  base: number;
  current: number;
};
