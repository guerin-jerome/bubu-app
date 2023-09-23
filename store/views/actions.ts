import {TViewsChangeAction} from '../../types/store/views/actions';
import {CHANGE_VIEWS_TYPE} from './constants';

export const changeView = (payload: string): TViewsChangeAction => ({
  type: CHANGE_VIEWS_TYPE,
  payload,
});
