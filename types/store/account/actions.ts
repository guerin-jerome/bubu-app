export type TSelectAccountPayload = {
  accountid: number;
};

export type TSelectAccountAction = {
  type: 'account.select.type';
  payload: TSelectAccountPayload;
};

export type TAccountActions = TSelectAccountAction;
