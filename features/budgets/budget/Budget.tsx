import React, {useContext} from 'react';
import {TBudget} from '../../../types/TBudget';
import {Pressable, StyleSheet} from 'react-native';
import {Box, Progress, Text} from 'native-base';
import {PRIMARY_COLOR} from '../../../constants';
import {AppContext} from '../../../context/AppContext';
import {changeView} from '../../../store/views/actions';
import {formatType} from '../../../utils/budget';

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

export const Budget = ({id, name, type, base, current}: TBudget) => {
  const {dispatch} = useContext(AppContext);

  const handleClickBudget = () => {
    dispatch(changeView(`budget.${id}`));
  };

  return (
    <Pressable style={style.card} onPress={handleClickBudget}>
      <Box style={style.budgetHeader}>
        <Text>{name}</Text>
        <Text>{formatType(type)}</Text>
      </Box>
      <Text bold fontSize="sm">
        {current}€/{base}€
      </Text>
      <Progress
        _filledTrack={{backgroundColor: PRIMARY_COLOR}}
        value={(100 * current) / base}
      />
    </Pressable>
  );
};
