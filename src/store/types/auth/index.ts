export type Profile = {
    login: string;    
    access_token: string;
    refresh_token: string;
    isAuthentificated: boolean;
}

export enum AUTH_ACTION_TYPES {
    PROFILE = 'AUTH/PROFILE',
    LOGIN = 'AUTH/LOGIN',
    REGISTER = 'AUTH/REGISTER',
    LOGOUT = 'AUTH/LOGOUT'
}

export interface LoginAction {
    type: string;
    payload: Profile;
}

export interface RegisterAction {
    type: string;    
    payload: Profile;
}

export interface ProfileAction {
    type: string;
    payload: Profile;
}

export interface LogoutAction {
    type: string;      
}

export type AuthListAction = LoginAction | RegisterAction | ProfileAction;
export type LogoutListAction = LogoutAction;