import post from "../reducers/post";
import { FETCH_POST } from "./actiontype";

export function fetchPosts() {
    return (dispatch) => {
        //console.log('fetchPost.dispatch',dispatch);
        const url = 'http://codeial.com:8000/api/v2/posts?page=1&limit=5';
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

export function fetchPost(post){
    return {
        type:FETCH_POST,
        post
    };
}