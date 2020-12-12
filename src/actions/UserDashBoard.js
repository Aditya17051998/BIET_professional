import {FETCH_ALUMINI, FETCH_USERS} from '../actions/actiontype';
export function fetchUsers(){
    return (dispatch) => {
        //console.log('fetchPost.dispatch',dispatch);
        const url = `http://localhost:7000/api/v1/user/fetch?admin=false`;
        //const url = APIurls.fetchPosts(1,6);
        fetch(url,{
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
            },
        })
        .then((response) => {
            //console.log('response',response);
            return response.json();
        })
        .then((data) => {
            console.log('data_userslist',data);
            dispatch(fetchUsersList(data.data.user));
            //return data.data.user;
        });
    };

}
export function fetchAlumini(){
    return (dispatch) => {
        //console.log('fetchPost.dispatch',dispatch);
        const url = `http://localhost:7000/api/v1/user/fetch?admin=true`;
        //const url = APIurls.fetchPosts(1,6);
        fetch(url,{
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
            },
        })
        .then((response) => {
            //console.log('response',response);
            return response.json();
        })
        .then((data) => {
            console.log('data_userslist',data);
            dispatch(fetchAluminisList(data.data.user));
            //return data.data.user;
        });
    };

}
export function fetchUsersList(users){
    return {
        type:FETCH_USERS,
        users,
    }
}
export function fetchAluminisList(alumini){
    return {
        type:FETCH_ALUMINI,
        alumini,
    }
}
