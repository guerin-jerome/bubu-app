import {TAccount} from '../../TAccount';

export type TSelectAccountPayload = {
  accountid: number;
};

export type TSelectAccountAction = {
  type: 'account.select.type';
  payload: TSelectAccountPayload;
};

export type TAddAccountAction = {
  type: 'account.add.type';
  payload: TAccount;
};

export type TAccountActions = TSelectAccountAction | TAddAccountAction;
