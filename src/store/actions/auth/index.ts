import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AuthListAction, LogoutListAction, AUTH_ACTION_TYPES, Profile } from '../../types/auth';
import { apiService } from '../../../services/api/index';

const loginSuccess = (data: Profile) => {
    return ({
        type: AUTH_ACTION_TYPES.LOGIN,
        payload: data
    });
}

const profileSuccess = (data: Profile) => {
    return ({
        type: AUTH_ACTION_TYPES.PROFILE,
        payload: data
    });
}

const logoutSuccess = () => {
    return ({
        type: AUTH_ACTION_TYPES.LOGOUT        
    });
}

export const login: ActionCreator<ThunkAction<Promise<AuthListAction>, Profile, null, AuthListAction>> = (login: string, password: string) => {
    return async (dispatch: Dispatch<AuthListAction>): Promise<AuthListAction> => {
        const result = await apiService.login(login, password);
        return dispatch(loginSuccess({ login: login, access_token: result.access_token, refresh_token: result.refresh_token, isAuthentificated: true }));
    }
}

export const logout: ActionCreator<ThunkAction<LogoutListAction, null, null, LogoutListAction>> = () => {
    return (dispatch: Dispatch<LogoutListAction>): LogoutListAction => {          
        return dispatch(logoutSuccess());
    }
}

export const profile: ActionCreator<ThunkAction<Promise<AuthListAction>, Profile, null, AuthListAction>> = () => {
    return async (dispatch: Dispatch<AuthListAction>): Promise<AuthListAction> => {
        const result = await apiService.getProfile();
        return dispatch(profileSuccess({ login: '', access_token: '', refresh_token: '', isAuthentificated: true }));
    }
}
