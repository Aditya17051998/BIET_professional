import { FETCH_ALUMINI } from "../actions/actiontype";

export default function alumini (state=[],action){
    switch(action.type){
        case FETCH_ALUMINI:
            return action.alumini;
        default:
            return state;


    }
}