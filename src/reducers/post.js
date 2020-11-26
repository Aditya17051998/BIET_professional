import { FETCH_POST , ADD_POST} from '../actions/actiontype';

const initialState={};
export default function post(state=[],action){
    switch(action.type){
        case ADD_POST:
            return [action.post, ...state];
        case FETCH_POST:
            return action.post;
        default:
            return state;
    }


} 