export type TBudget = {
  id: number;
  accountid: number;
  name: string;
  type: 'saved' | 'variable' | 'fixed';
  base: number;
  current: number;
};
