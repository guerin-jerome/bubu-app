import {Appearance, Dimensions} from 'react-native';

export const {height: screenHeight, width: screenWidth} =
  Dimensions.get('window');

export const PRIMARY_COLOR = '#a34a78';
export const SUBTLE_COLOR = '#fce7f3';
export const SUBTLE_ITEM_COLOR = '#831943';
const BLACK_COLOR = '#02130b';
const WHITE_COLOR = '#fafefc';
const GRAY_COLOR = '#718096';

export const COLOR_THEME = {
  light: {
    background: WHITE_COLOR,
    border: BLACK_COLOR,
    text: BLACK_COLOR,
    placeholder: GRAY_COLOR,
    focus: BLACK_COLOR,
  },
  dark: {
    background: BLACK_COLOR,
    border: WHITE_COLOR,
    text: WHITE_COLOR,
    placeholder: GRAY_COLOR,
    focus: BLACK_COLOR,
  },
  black: BLACK_COLOR,
  white: WHITE_COLOR,
  gray: GRAY_COLOR,
  primary: PRIMARY_COLOR,
  subtle: SUBTLE_COLOR,
  subtleItem: SUBTLE_ITEM_COLOR,
};

export const APP_LOGO =
  Appearance.getColorScheme() === 'dark'
    ? require('./assets/bubu_logo_dark.png')
    : require('./assets/bubu_logo_light.png');

export const ColorThemeStyle =
  Appearance.getColorScheme() === 'dark' ? COLOR_THEME.dark : COLOR_THEME.light;
