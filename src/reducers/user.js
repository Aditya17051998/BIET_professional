import { USER_PROFILE } from "../actions/actiontype";

export default function profile(state={},action){
    switch(action.type){
        case USER_PROFILE:
          return action.user;
        default :
          return state;
    }

}