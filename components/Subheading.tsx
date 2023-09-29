import React from 'react';
import {IHeadingProps, Heading as NativeBaseHeading} from 'native-base';
import {ColorThemeStyle} from '../constants';

export const Subheading = (props: IHeadingProps) => (
  <NativeBaseHeading size="sm" color={ColorThemeStyle.text} {...props} />
);
