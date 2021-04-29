import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR,
} from "../actions/actionTypes";
import initialState from "../initialState/authState";

const auth = (state, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        isLoggedIn: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case LOGOUT:
      return {
        ...state,
        ...initialState,
      };
    case CLEAR:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export default auth;
