import React, {useContext} from 'react';
import {TBudget} from '../../../types/TBudget';
import {Pressable, StyleSheet} from 'react-native';
import {Box, Progress, Text} from 'native-base';
import {ColorThemeStyle, PRIMARY_COLOR} from '../../../constants';
import {AppContext} from '../../../context/AppContext';
import {changeView} from '../../../store/views/actions';
import {formatType} from '../../../utils/budget';

const style = StyleSheet.create({
  card: {
    borderColor: ColorThemeStyle.border,
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

type TBudgetBody = {
  base?: number;
  current: number;
};

const BudgetBody = ({base, current}: TBudgetBody) => (
  <>
    <Text bold fontSize="sm" color={ColorThemeStyle.text}>
      {current} € / {base} €
    </Text>
    <Progress
      _filledTrack={{backgroundColor: PRIMARY_COLOR}}
      value={(100 * current) / (base ?? 0)}
    />
  </>
);

const SavedBudgetBody = ({current}: TBudgetBody) => (
  <>
    <Text bold fontSize="sm" color={ColorThemeStyle.text}>
      {current} €
    </Text>
    <Progress _filledTrack={{backgroundColor: PRIMARY_COLOR}} value={100} />
  </>
);

export const Budget = ({id, name, type, base, current}: TBudget) => {
  const {dispatch} = useContext(AppContext);

  const handleClickBudget = () => {
    dispatch(changeView(`budget.${id}`));
  };

  return (
    <Pressable style={style.card} onPress={handleClickBudget}>
      <Box style={style.budgetHeader}>
        <Text color={ColorThemeStyle.text}>{name}</Text>
        <Text color={ColorThemeStyle.text}>{formatType(type)}</Text>
      </Box>
      {type === 'saved' ? (
        <SavedBudgetBody base={base} current={current} />
      ) : (
        <BudgetBody base={base} current={current} />
      )}
    </Pressable>
  );
};
