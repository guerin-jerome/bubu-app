import React from 'react';
import {TExpense} from '../../../types/TExpense';
import {Text} from 'react-native';
import {formatDate} from '../../../utils/date';

export const Expense = ({details, date, value}: TExpense) => (
  <>
    <Text>{details}</Text>
    <Text>{formatDate(date)}</Text>
    <Text>{value} €</Text>
  </>
);
