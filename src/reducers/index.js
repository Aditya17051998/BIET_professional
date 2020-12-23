import { combineReducers } from "redux";

import auth from './auth';
import post from './post';
import search from './search';
import friends from './friends';
import profile from './user';
import userslist from './userslist';
import alumini from './alumini';
import dashboard from './dashboard';

export default combineReducers({
    auth,
    post,
    search,
    friends,
    profile,
    userslist,
    alumini,
    dashboard,
});