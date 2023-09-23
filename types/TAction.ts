import {TAccountActions} from './store/account/actions';
import {TAuthenticationActions} from './store/authentication/actions';
import {TViewsActions} from './store/views/actions';

export type TAction = TAuthenticationActions | TAccountActions | TViewsActions;
