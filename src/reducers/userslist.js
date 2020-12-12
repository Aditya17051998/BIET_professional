import { FETCH_USERS } from "../actions/actiontype";

export default function userslist (state=[],action){
    switch(action.type){
        case FETCH_USERS:
            return action.users;
        default:
            return state;


    }
}