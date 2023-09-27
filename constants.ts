import {Appearance, Dimensions} from 'react-native';

export const {height: screenHeight, width: screenWidth} =
  Dimensions.get('window');

export const PRIMARY_COLOR = '#e84393';
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
};

export const LOGO_URI =
  Appearance.getColorScheme() === 'dark'
    ? 'https://i.postimg.cc/YqdJRp8z/Design-sans-titre-1.png'
    : 'https://i.postimg.cc/j2DsXt6B/Design-sans-titre.png';

export const ColorThemeStyle =
  Appearance.getColorScheme() === 'dark' ? COLOR_THEME.dark : COLOR_THEME.light;
