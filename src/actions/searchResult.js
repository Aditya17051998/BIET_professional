
import { SEARCH_RESULT_FAILED, SEARCH_RESULT_START, SEARCH_RESULT_SUCCESS } from "./actiontype";


export function getAuthTokenFromLocal(){
    return localStorage.getItem('token');
}
export function searchResult(searchName){
    return (dispatch) => {
        dispatch(search_result_start());
        //console.log('fetchPost.dispatch',dispatch);
        // const url = `http://codeial.com:8000/api/v2/users/search?text=${searchName}`;
        const url=`https://biet-backend.herokuapp.com/api/v1/user/search?text=${searchName}`;
        //const url = APIurls.fetchPosts(1,6);
        fetch(url,{
            //method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
                Authorization: `Bearer ${getAuthTokenFromLocal()}`,
            },
            //body:getFormBody({content}),
        })
        .then((response) => {
            //console.log('response',response);
            return response.json();
        })
        .then((data) => {
            console.log('data',data);
            if(data.success){
                //// dispatch action to save user
                //localStorage.setItem('token', data.data.token);
                dispatch(search_result_success(data.data.users));
               // return;
            }
           // dispatch(loginFaild(data.messege));
        });
    };

}

export function search_result_start(){
    return {
        type:SEARCH_RESULT_START,
    }
}
export function search_result_success(results){
    return {
        type:SEARCH_RESULT_SUCCESS,
        results,
    }
}
export function search_result_failed(error){
    return {
        type:SEARCH_RESULT_FAILED,
        error,
    }
}