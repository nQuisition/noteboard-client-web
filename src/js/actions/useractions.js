import { callApi } from '../config';

export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';

export function login(jwt) {
  return dispatch => {
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        jwt: jwt,
        name: "user_" + jwt
      }
    });
  }
}

export function signIn(email, password) {
  return dispatch => {
    dispatch({type: SIGNIN_REQUEST});
    const params = { email, password };
    return callApi('post', 'user/login/', params)
      .then(response => {
        dispatch({type: SIGNIN_SUCCESS, payload: {
          token: response.data.token,
          user: response.data.user
        }});
      })
      .catch(err => {
        dispatch({type: SIGNIN_FAILURE, payload: err});
      });
  }
}
