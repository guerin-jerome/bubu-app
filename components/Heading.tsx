import React from 'react';
import {IHeadingProps, Heading as NativeBaseHeading} from 'native-base';
import {ColorThemeStyle} from '../constants';

export const Heading = (props: IHeadingProps) => (
  <NativeBaseHeading size="md" color={ColorThemeStyle.text} {...props} />
);
