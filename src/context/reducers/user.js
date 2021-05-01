import {
  USER_LOADING,
  USER_SUCCESS,
  USER_FAIL,
  USER_CLEAR,
} from "../actions/actionTypes";
import initialState from "../initialState/userState";
const user = (state, { type, payload }) => {
  switch (type) {
    case USER_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case USER_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case USER_CLEAR:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export default user;
