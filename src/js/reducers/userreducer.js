import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE } from '../actions/useractions';

const defaultState = {
  jwt: '',
  _id: '',
  name: '',
  email: '',
  role: ''
};

export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        jwt: action.payload.jwt
      }
    }
    case "LOGOUT_SUCCESS": {
      return {...defaultState};
    }

    case SIGNIN_SUCCESS: {
      sessionStorage.setItem('jwtToken', action.payload.token);
      return {
        ...state,
        ...action.payload.user,
        jwt: action.payload.token
      };
    }
  }
  return state;
}
