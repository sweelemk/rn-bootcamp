import {
  USER_LOADING,
  USER_SUCCESS,
  USER_FAIL,
  USER_CLEAR,
} from "./actionTypes";
import * as UserController from "../controllers/user-controller";

export const getUser = (userId) => async (dispatch) => {
  dispatch({
    type: USER_LOADING,
  });
  try {
    const user = await UserController.loadUser(userId);
    dispatch({
      type: USER_SUCCESS,
      payload: user,
    });
  } catch (err) {
    dispatch({
      type: USER_FAIL,
      payload: err.response.data,
    });
  }
};

export const clearUser = () => (dispatch) => {
  dispatch({
    type: USER_CLEAR,
  });
};
