import React, { createContext, useReducer } from "react";
import authInitialState from "./initialState/authState";
import userInitialState from "./initialState/userState";
import auth from "./reducers/auth";
import user from "./reducers/user";

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [userState, userDispatch] = useReducer(user, userInitialState);
  return (
    <AppContext.Provider
      value={{ authState, authDispatch, userState, userDispatch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
