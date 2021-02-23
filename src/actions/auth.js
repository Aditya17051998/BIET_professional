import {LOGIN_START,LOGIN_SUCCESS,LOGIN_FAILED,
  SIGNUP_FAILED,SIGNUP_START,SIGNUP_SUCCESS,
  AUTHENTICATE_USER,LOG_OUT, EDIT_PROFILE} from '../actions/actiontype';

///////// all action creater should be dispached///////////
export function startLogin(){
    return {
        type: LOGIN_START,
    };
}
export function loginFaild(errorMessege){
    return {
        type: LOGIN_FAILED,
        error:errorMessege
    };
}
export function loginSuccess(user){
    return {
        type: LOGIN_SUCCESS,
        user
    };
}
export function logout(){
  return {
    type : LOG_OUT,
  };
}

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


export function login(email,password){
    return (dispatch)=>{
        dispatch(startLogin());
        //const url="http://codeial.com:8000/api/v2/users/login";
        const url="http://localhost:7000/api/v1/user/create-session";
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
            },
            body:getFormBody({email,password}),
        })
        .then(response=>response.json())
        .then(data=>{
            console.log('data_user_signin',data);
            if(data.success){
                //// dispatch action to save user
                localStorage.setItem('token', data.data.token);
                dispatch(loginSuccess(data.data.user));
                return;
            }
            dispatch(loginFaild(data.message));
        })
    }

}
export function signup(email, password, confirmPassword, name,isAluminia) {
    return (dispatch) => {
      dispatch(startSingup());
       const url = "https://biet-backend.herokuapp.com/api/v1/user/signup";
      //const url="http://localhost:7000/api/v1/user/signup";
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: getFormBody({
          email,
          password,
          confirm_password: confirmPassword,
          name,
          aluminia:isAluminia,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
           console.log('data', data);
          if (data.success) {
            // do something
            localStorage.setItem('token', data.data.token);  //////set token in locall storage
            dispatch(signupSuccessful(data.data.user));
            return;
          }
          dispatch(signupFailed(data.message));
        });
    };
  }

  // export function editProfile(name,password,confirmPassword,UserId){

  //   return (dispatch) => {
  //     //console.log('fetchPost.dispatch',dispatch);
  //     const url = 'http://codeial.com:8000/api/v2/users/edit';
  //     //const url = APIurls.fetchPosts(1,6);
  //     fetch(url,{
  //         method:'POST',
  //         headers:{
  //             'Content-Type':'application/x-www-form-urlencoded',
  //             Authorization: `Bearer ${getAuthTokenFromLocal()}`,
  //         },
  //         body:getFormBody({
  //           name,
  //           password,
  //           confirm_password:confirmPassword,
  //           id:UserId
  //         }),
  //     })
  //     .then((response) => {
  //         //console.log('response',response);
  //         return response.json();
  //     })
  //     .then((data) => {
  //         console.log('data',data);
  //       //   if(data.success){
  //       //       //// dispatch action to save user
  //       //       //localStorage.setItem('token', data.data.token);
  //       //       //dispatch(editUserData(data.data.user));
  //       //      // return;
  //       //   }
  //       //  // dispatch(loginFaild(data.messege));
  //     });
  // };

  // }

  export function startSingup() {
    return {
      type: SIGNUP_START,
    };
  }
  
  export function signupFailed(error) {
    return {
      type: SIGNUP_FAILED,
      error,
    };
  }
  
  export function signupSuccessful(user) {
    return {
      type: SIGNUP_SUCCESS,
      user,
    };
  }

  export default function authenticate(user){
    return {
      type : AUTHENTICATE_USER,
      user,
    };
  }

  export function editProfile(name,image,UserId,skills,year){
    return (dispatch)=>{
      // const url='http://codeial.com:8000/api/v2/users/edit';
      const url=`http://localhost:7000/api/v1/user/edit/${UserId}`
      var data=new FormData();
      data.append('avatar',image);
      data.append('name',name);
      data.append('skills',skills);
      data.append('year',year);
      //data.append('email',image);
      fetch(url,{
        method: 'POST',
        headers: {
          Accept: '*/*',
          //  Authorization: `Bearer ${getAuthTokenFromLocal()}`,
        },
        // body: getFormBody({
        //   name,
        //   password,
        //   confirm_password:confirmPassword,
        //   id:UserId,
        // }),
        body:data,

      })
      .then((response)=>response.json())
      .then(data=>{
        console.log('edit profile data',data);
         if(data.success){
           dispatch(editUserSuccess(data.data.user));
         if(data.data.token){
            localStorage.setItem('token',data.data.token);
  
          }
          return;
         }
        
        // dispatch(editUserFail(data.message));
      });

    };
  }

  export function editUserSuccess(user){
    return {
      type:EDIT_PROFILE,
      user,
    }
  }
  
