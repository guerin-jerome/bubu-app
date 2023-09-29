import React from 'react';
import {IButtonProps, Button as NativeBaseButton} from 'native-base';
import {COLOR_THEME} from '../constants';
import {TButtonProps} from '../types/components/TButtonProps';

export const Button = (props: TButtonProps) => {
  const buttonVariant = props.variant || 'primary';
  const backgroundColor =
    buttonVariant === 'primary' ? COLOR_THEME.primary : COLOR_THEME.subtle;
  const textColor =
    buttonVariant === 'primary' ? COLOR_THEME.white : COLOR_THEME.subtleItem;

  return (
    <NativeBaseButton
      onPress={props.onPress}
      backgroundColor={backgroundColor}
      _text={{color: textColor}}
      isLoading={props.disabled}
      isDisabled={props.disabled}
      variant={buttonVariant}
      {...(props as IButtonProps)}
    />
  );
};
