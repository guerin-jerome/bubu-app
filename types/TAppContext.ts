import {Dispatch} from 'react';
import {TAppState} from './TAppState';
import {TAction} from './TAction';

export type TAppContext = {
  appState: TAppState;
  dispatch: Dispatch<TAction>;
};
