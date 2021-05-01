import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAIL, CLEAR } from "./actionTypes";
import * as LoginController from "../controllers/login-controller";

export const login = ({ memberId, password }) => async (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });
  try {
    const credentials = await LoginController.loadCredentials(
      memberId,
      password
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: credentials,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data,
    });
  }
};

export const clear = () => (dispatch) => {
  dispatch({
    type: CLEAR,
  });
};
