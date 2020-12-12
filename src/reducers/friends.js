import {FETCH_FRIEND} from '../actions/actiontype';
const friendList=[];

export default function friends(state=friendList,action){
    switch (action.type){
        case FETCH_FRIEND :
            return [...action.friends];
        default :
        return state;
    }
}