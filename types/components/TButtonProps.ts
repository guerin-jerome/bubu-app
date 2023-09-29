import {IHeadingProps} from 'native-base';

export type TButtonProps = IHeadingProps & {
  variant?: 'primary' | 'subtle';
  leftIcon?: Element;
};
