import React from 'react';
import {TExpense} from '../../../types/TExpense';
import {StyleSheet} from 'react-native';
import {formatDate} from '../../../utils/date';
import {Box, Text} from 'native-base';
import {PRIMARY_COLOR} from '../../../constants';

const style = StyleSheet.create({
  card: {
    flexDirection: 'row',
  },
  infos: {
    alignSelf: 'center',
    marginBottom: 8,
  },
  point: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: PRIMARY_COLOR,
    marginRight: 8,
    marginTop: 7,
  },
});

export const Expense = ({details, date, value}: TExpense) => (
  <Box style={style.card}>
    <Box style={style.point} />
    <Box style={style.infos}>
      <Text>
        {formatDate(date)} - {details}
      </Text>
      <Text bold fontSize="md">
        {value} €
      </Text>
    </Box>
  </Box>
);
