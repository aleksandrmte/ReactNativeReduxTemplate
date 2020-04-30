import { Profile, AUTH_ACTION_TYPES } from '../../types/auth';
import { AnyAction } from 'redux';

export const initialState: Profile = {
    login: '',
    access_token: '',
    refresh_token: '',
    isAuthentificated: false
};

export const authReducer = (
    state: Profile = initialState,
    action: AnyAction
) => {
    switch (action.type) {
        case AUTH_ACTION_TYPES.LOGIN:
            return {
                ...state,
                ...action.payload
            };
        case AUTH_ACTION_TYPES.PROFILE:
            return {
                ...state,
                ...action.payload
            };
        case AUTH_ACTION_TYPES.LOGOUT:            
            return {
                ...initialState                
            };
        default:
            return state;
    }
}