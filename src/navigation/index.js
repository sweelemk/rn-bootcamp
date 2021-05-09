import React, { useContext } from "react";
import { AuthenticaionNavigator } from "../screens/Auth";
import { StackNavigator } from "../screens/App";
import { AppContext } from "../context/Provider";

const Navigation = () => {
  const state = useContext(AppContext);
  const {
    authState: { isLoggedIn },
  } = state;
  return <>{isLoggedIn ? <StackNavigator /> : <AuthenticaionNavigator />}</>;
};

export default Navigation;
