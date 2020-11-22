import {LOGIN_START,LOGIN_SUCCESS,LOGIN_FAILED,SIGNUP_FAILED,SIGNUP_START,SIGNUP_SUCCESS} from '../actions/actiontype';

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

export function getFormBody(params){
    let formBody=[];
    for(let property in params){
        let key=encodeURIComponent(property);
        let value=encodeURIComponent(params[property]);
        formBody.push(key+'='+value);
    }
    return formBody.join('&');
}

export function login(email,password){
    return (dispatch)=>{
        dispatch(startLogin());
        const url="http://codeial.com:8000/api/v2/users/login";
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
            },
            body:getFormBody({email,password}),
        })
        .then(response=>response.json())
        .then(data=>{
            console.log('data',data);
            if(data.success){
                //// dispatch action to save user
                dispatch(loginSuccess(data.data.user));
                return;
            }
            dispatch(loginFaild(data.messege));
        })
    }

}
export function signup(email, password, confirmPassword, name) {
    return (dispatch) => {
      const url = "http://codeial.com:8000/api/v2/users/signup";
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
        }),
      })
        .then((response) => response.json())
        .then((data) => {
           //console.log('data', data);
          if (data.success) {
            // do something
            localStorage.setItem('token', data.data.token);
            dispatch(signupSuccessful(data.data.user));
            return;
          }
          dispatch(signupFailed(data.message));
        });
    };
  }

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
