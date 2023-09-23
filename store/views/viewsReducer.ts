import {initialAppState} from '../../context/AppContext';
import {TAppState} from '../../types/TAppState';
import {TViewsActions} from '../../types/store/views/actions';
import {CHANGE_VIEWS_TYPE} from './constants';

export const viewsReducer = (
  state: TAppState,
  action: TViewsActions,
): TAppState => {
  const {type, payload} = action;

  switch (type) {
    case CHANGE_VIEWS_TYPE:
      return {
        ...state,
        activeView: payload,
      };
    default:
      console.error(`Unknown action in viewsReducer, with type: ${type}`);
      return initialAppState;
  }
};
