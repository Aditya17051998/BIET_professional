import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers';

let store;

export default function configureStore(){
    store=createStore(reducer,applyMiddleware(thunk,logger));  //// here we create a store and passed a reducer in it which reducer in index.js of reducer

    return store;
}
