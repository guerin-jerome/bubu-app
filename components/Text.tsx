import React from 'react';
import {ITextProps, Text as NativeBaseText} from 'native-base';
import {ColorThemeStyle} from '../constants';

export const Text = (props: ITextProps) => (
  <NativeBaseText color={ColorThemeStyle.text} {...props} />
);
