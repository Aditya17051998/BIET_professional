import { FETCH_FRIEND } from "./actiontype";


export function getAuthTokenFromLocal(){
    return localStorage.getItem('token');
}
export function fetchFriends(){
    return (dispatch) => {
        //dispatch(search_result_start());
        //console.log('fetchPost.dispatch',dispatch);
        // const url = `http://codeial.com:8000/api/v2/friendship/fetch_user_friends`;
        const url='https://biet-backend.herokuapp.com/api/v1/friend/fetch_user_friends';
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
            console.log('friends list data',data);
            if(data.success){
                //// dispatch action to save user
                //localStorage.setItem('token', data.data.token);
                dispatch(fetch_friends(data.data.friends));
                
               // return;
            }
           // dispatch(loginFaild(data.messege));
        });
    };

}

export function addFriends(userId){
    return (dispatch) => {
        //dispatch(search_result_start());
        //console.log('fetchPost.dispatch',dispatch);
        // const url = `http://codeial.com:8000/api/v2/friendship/create_friendship?user_id=${userId}`;
        const url=`https://biet-backend.herokuapp.com/api/v1/friend/create_friendship?user_id=${userId}`;
        //const url = APIurls.fetchPosts(1,6);
        fetch(url,{
            method:'POST',
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
            console.log('friends add data',data.data);
            if(data.success){
                //// dispatch action to save user
                //localStorage.setItem('token', data.data.token);
                //dispatch(fetch_friends());
               // return;
            }
           // dispatch(loginFaild(data.messege));
        });
    };

}
export function removeFriends(userId){
    return (dispatch) => {
        //dispatch(search_result_start());
        //console.log('fetchPost.dispatch',dispatch);
        // const url = `http://codeial.com:8000/api/v2/friendship/create_friendship?user_id=${userId}`;
        const url=`https://biet-backend.herokuapp.com/api/v1/friend/remove_friendship?user_id=${userId}`;
        //const url = APIurls.fetchPosts(1,6);
        fetch(url,{
            method:'POST',
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
            console.log('friends add data',data.data);
            if(data.success){
                //// dispatch action to save user
                //localStorage.setItem('token', data.data.token);
                //dispatch(fetch_friends());
               // return;
            }
           // dispatch(loginFaild(data.messege));
        });
    };

}

export function fetch_friends(friends){
    return {
        type:FETCH_FRIEND,
        friends,
    }
}
