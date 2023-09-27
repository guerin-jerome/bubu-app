import React from 'react';
import {Input as NativeBaseInput} from 'native-base';
import {ColorThemeStyle, PRIMARY_COLOR, SUBTLE_COLOR} from '../constants';
import {IInputProps} from 'native-base/lib/typescript/components/primitives/Input/types';

export const Input = (props: IInputProps) => (
  <NativeBaseInput
    {...props}
    marginBottom={3}
    focusOutlineColor={PRIMARY_COLOR}
    _focus={{
      backgroundColor: SUBTLE_COLOR,
      color: ColorThemeStyle.focus,
    }}
    color={ColorThemeStyle.text}
  />
);
