import React from 'react';
import {TBudget} from '../../../types/TBudget';
import {StyleSheet} from 'react-native';
import {Box, Progress, Text} from 'native-base';
import {PRIMARY_COLOR} from '../../../constants';

const style = StyleSheet.create({
  card: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
  },
  budgetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export const Budget = ({name, type, base, current}: TBudget) => {
  const formatType = () => {
    switch (type) {
      case 'saved':
        return 'EPARGNE';
      case 'variable':
        return 'VARIABLE';
      case 'fixed':
        return 'FIXE';
    }
  };

  return (
    <Box style={style.card}>
      <Box style={style.budgetHeader}>
        <Text>{name}</Text>
        <Text>{formatType()}</Text>
      </Box>
      <Text bold fontSize="sm">
        {current}€/{base}€
      </Text>
      <Progress
        _filledTrack={{backgroundColor: PRIMARY_COLOR}}
        value={(100 * current) / base}
      />
    </Box>
  );
};
