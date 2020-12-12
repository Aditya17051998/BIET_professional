import {LOGIN_START,LOGIN_SUCCESS,LOGIN_FAILED,SIGNUP_FAILED,SIGNUP_START,SIGNUP_SUCCESS,AUTHENTICATE_USER, LOG_OUT, EDIT_PROFILE} from '../actions/actiontype';

const initialAuth = {
    user : {},
    error :null,
    isLoggedIn : false,
    inProgress : false,
};

export default function Auth(state=initialAuth,action){
    switch(action.type){
        case LOGIN_START:
        case SIGNUP_START:
            return {
                ...state,
                inProgress:true
            };
        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
        case EDIT_PROFILE:
            return {
                ...state,
               user:action.user,
               isLoggedIn:true,
               inProgress:false,
               error:null
            };
        case LOGIN_FAILED:
        case SIGNUP_FAILED:
            return {
                ...state,
                inProgress:false,
                error:action.error

            }
        case AUTHENTICATE_USER:
            return {
                ...state,
                user:action.user,
                isLoggedIn:true
            }
        case LOG_OUT:
            return {
                ...state,
                user:{},
                isLoggedIn:false

            };
        default:
            return state;
                
    }

}