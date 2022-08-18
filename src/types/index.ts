import { AuthActions } from './action-types/auth.types';
import { CommonActionTypes } from './action-types/common.types';
import { DashboardActionTypes } from './action-types/dashboard.types';


export type AppActions =
	| AuthActions
	| CommonActionTypes
	| DashboardActionTypes;
