import { USER_PROFILE } from "./actiontype";

export function getAuthTokenFromLocal(){
    return localStorage.getItem('token');
}

export function getUserProfile(userId){
    return (dispatch) => {
        //console.log('fetchPost.dispatch',dispatch);
        // const url = `http://codeial.com:8000/api/v2/users/${userId}`;
        const url=`http://localhost:7000/api/v1/user/profile/${userId}`;
        //const url = APIurls.fetchPosts(1,6);
        fetch(url,{
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
                // Authorization: `Bearer ${getAuthTokenFromLocal()}`,
            },
        })
        .then((response) => {
            //console.log('response',response);
            return response.json();
        })
        .then((data) => {
            // console.log('data',data);
            dispatch(fetchUserProfile(data.data.user));
            //return data.data.user;
        });
    };

}

export function fetchUserProfile(user){
    return {
        type:USER_PROFILE,
        user,
    }
}