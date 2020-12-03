import { SEARCH_RESULT_FAILED, SEARCH_RESULT_START, SEARCH_RESULT_SUCCESS } from "../actions/actiontype"

const initialResultState={
    result:[],
    searchFilter:false,

};
export default function search(state=initialResultState,action){
    switch(action.type){
        case SEARCH_RESULT_START:
            return {
                ...state,
                searchFilter:false,
            };
        case SEARCH_RESULT_SUCCESS:
            return {
                ...state,
                searchFilter:true,
                result:action.results,
            };
        case SEARCH_RESULT_FAILED:
            return {
                ...state,
                searchFilter:false,
            };
        default:
            return state;
    }
}