import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAIL } from "./actionTypes";
import axiosInstance from "../../helpers/axiosInterceptor";
import { FAKE_TOKEN } from "../../utils/constants";

export default ({ memberId, password }) => (dispatch) => {
  dispatch(LOGIN_LOADING);
  axiosInstance
    .post("login", {
      memberId,
      password,
    })
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.data.error,
      });
    });
};
