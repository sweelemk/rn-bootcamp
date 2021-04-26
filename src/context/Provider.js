import React, { createContext, useReducer } from "react";
import authInitialState from "./initialState/authState";
import auth from "./reducers/auth";

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  return (
    <AppContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
