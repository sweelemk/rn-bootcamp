import { LOGOUT } from "./actionTypes";

export default () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
