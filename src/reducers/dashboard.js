import { FETCH_DASHBOARD } from "../actions/actiontype";

export default function dashboard (state=[],action){
    switch(action.type){
        case FETCH_DASHBOARD:
            return [...action.users];
        default:
            return state;


    }
}