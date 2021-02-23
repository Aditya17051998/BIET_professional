import post from "../reducers/post";
import { FETCH_POST,ADD_POST } from "./actiontype";


export function getFormBody(params){
    let formBody=[];
    for(let property in params){
        let key=encodeURIComponent(property);
        let value=encodeURIComponent(params[property]);
        formBody.push(key+'='+value);
    }
    return formBody.join('&');
}

export function getAuthTokenFromLocal(){
    return localStorage.getItem('token');
}

export function fetchPosts() {
    return (dispatch) => {
        //console.log('fetchPost.dispatch',dispatch);
        // const url = 'http://codeial.com:8000/api/v2/posts?page=1&limit=5';
        const url=`https://biet-backend.herokuapp.com/api/v1/post/`
        //const url = APIurls.fetchPosts(1,6);
        fetch(url)
        .then((response) => {
            //console.log('response',response);
            return response.json();
        })
        .then((data) => {
            console.log('data',data);
            dispatch(fetchPost(data.data.posts));
        });
    };
}
export function createPost(content) {
    return (dispatch) => {
        //console.log('fetchPost.dispatch',dispatch);
        // const url = 'http://codeial.com:8000/api/v2/posts/create';
        const url=`https://biet-backend.herokuapp.com/api/v1/post/create`
        //const url = APIurls.fetchPosts(1,6);
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
                Authorization: `Bearer ${getAuthTokenFromLocal()}`,
            },
            body:getFormBody({content}),
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
                dispatch(addPost(data.data.post));
               // return;
            }
           // dispatch(loginFaild(data.messege));
        });
    };
}


export function deletePost(postId) {
    return (dispatch) => {
        //console.log('fetchPost.dispatch',dispatch);
        // const url = 'http://codeial.com:8000/api/v2/posts?page=1&limit=5';
        const url=`https://biet-backend.herokuapp.com/api/v1/post/${postId}`;
        //const url = APIurls.fetchPosts(1,6);
        fetch(url,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
                Authorization: `Bearer ${getAuthTokenFromLocal()}`,
            },
        })
        .then((response) => {
            //console.log('response',response);
            return response.json();
        })
        .then((data) => {
            console.log('data',data);
            

        });
    };
}


export function fetchPost(post){
    return {
        type:FETCH_POST,
        post
    };
}
export function addPost(post){
    return {
        type:ADD_POST,
        post
    };
}