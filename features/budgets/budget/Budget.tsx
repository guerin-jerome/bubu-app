import React, {useContext} from 'react';
import {TBudget} from '../../../types/TBudget';
import {Pressable, StyleSheet} from 'react-native';
import {Box, Progress} from 'native-base';
import {AppContext} from '../../../context/AppContext';
import {changeView} from '../../../store/views/actions';
import {formatType} from '../../../utils/budget';
import {STYLE_CARDS} from '../../../styles';
import {Text} from '../../../components';
import {COLOR_THEME} from '../../../constants';

const style = StyleSheet.create({
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
    <Text bold fontSize="sm">
      {current} € / {base} €
    </Text>
    <Progress
      _filledTrack={{backgroundColor: COLOR_THEME.primary}}
      value={(100 * current) / (base ?? 0)}
    />
  </>
);

const SavedBudgetBody = ({current}: TBudgetBody) => (
  <>
    <Text bold fontSize="sm">
      {current} €
    </Text>
    <Progress
      _filledTrack={{backgroundColor: COLOR_THEME.primary}}
      value={100}
    />
  </>
);

export const Budget = ({id, name, type, base, current}: TBudget) => {
  const {dispatch} = useContext(AppContext);

  const handleClickBudget = () => {
    dispatch(changeView(`budget.${id}`));
  };

  return (
    <Pressable style={STYLE_CARDS.budget} onPress={handleClickBudget}>
      <Box style={style.budgetHeader}>
        <Text>{name}</Text>
        <Text>{formatType(type)}</Text>
      </Box>
      {type === 'saved' ? (
        <SavedBudgetBody base={base} current={current} />
      ) : (
        <BudgetBody base={base} current={current} />
      )}
    </Pressable>
  );
};
