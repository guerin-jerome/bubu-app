export type TBudget = {
  id: string;
  accountid: string;
  userid: string;
  name: string;
  type: 'saved' | 'variable' | 'fixed';
  base: number;
  current: number;
};
