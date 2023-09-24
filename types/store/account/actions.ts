import {TAccount} from '../../TAccount';

export type TSelectAccountPayload = {
  accountid: string;
};

export type TSelectAccountAction = {
  type: 'account.select.type';
  payload: TSelectAccountPayload;
};

export type TAddAccountAction = {
  type: 'account.add.type';
  payload: TAccount;
};

export type TRemoveAccountAction = {
  type: 'account.remove.type';
  payload: string;
};

export type TAccountActions =
  | TSelectAccountAction
  | TAddAccountAction
  | TRemoveAccountAction;
