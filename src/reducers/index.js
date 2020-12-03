import { combineReducers } from "redux";

import auth from './auth';
import post from './post';
import search from './search';

export default combineReducers({
    auth,
    post,
    search,
});