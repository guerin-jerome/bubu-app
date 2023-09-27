import {StyleSheet} from 'react-native';
import {ColorThemeStyle} from './constants';

/**
 * Card
 */
const STYLE_CARD = {
  borderColor: ColorThemeStyle.border,
  borderWidth: 2,
  borderRadius: 5,
  padding: 15,
};

export const STYLE_CARDS = StyleSheet.create({
  account: {
    ...STYLE_CARD,
    width: 180,
    marginRight: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  budget: {
    ...STYLE_CARD,
    width: '100%',
    marginBottom: 15,
  },
  budgetForm: {
    ...STYLE_CARD,
    borderColor: ColorThemeStyle.border,
    width: '100%',
    marginRight: 10,
  },
  historyOfExpense: {
    ...STYLE_CARD,
    maxHeight: 350,
    width: '100%',
    marginRight: 10,
  },
});
