import React from 'react';
import {Input as NativeBaseInput} from 'native-base';
import {COLOR_THEME, ColorThemeStyle} from '../constants';
import {IInputProps} from 'native-base/lib/typescript/components/primitives/Input/types';

export const Input = (props: IInputProps) => (
  <NativeBaseInput
    {...props}
    marginBottom={3}
    focusOutlineColor={COLOR_THEME.primary}
    _focus={{
      backgroundColor: COLOR_THEME.subtle,
      color: ColorThemeStyle.focus,
    }}
    color={ColorThemeStyle.text}
  />
);
