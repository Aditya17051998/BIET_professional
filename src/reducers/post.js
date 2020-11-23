import { FETCH_POST } from '../actions/actiontype';

const initialState={};
export default function post(state=[],action){
    switch(action.type){
        case FETCH_POST:
            return action.post;
        default:
            return state;
    }


}