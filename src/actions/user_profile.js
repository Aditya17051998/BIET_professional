export function getAuthTokenFromLocal(){
    return localStorage.getItem('token');
}

export function getUserProfile(userId){
    return (dispatch) => {
        //console.log('fetchPost.dispatch',dispatch);
        const url = `http://codeial.com:8000/api/v2/users/${userId}`;
        //const url = APIurls.fetchPosts(1,6);
        fetch(url,{
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
            //dispatch(fetchPost(data.data.user));
        });
    };

}