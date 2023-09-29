import React from 'react';
import {ITextProps, Text as NativeBaseText} from 'native-base';
import {ColorThemeStyle} from '../constants';

export const Placeholder = (props: ITextProps) => (
  <NativeBaseText color={ColorThemeStyle.placeholder} {...props} />
);
