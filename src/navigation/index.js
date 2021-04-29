import React, { useContext } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthenticaionNavigator } from "../screens/Auth";
import { DrawerNavigator } from "../screens/App";
import { AppContext } from "../context/Provider";

const Navigation = () => {
  const state = useContext(AppContext);
  const {
    authState: { isLoggedIn },
  } = state;
  return (
    <SafeAreaProvider>
      {isLoggedIn ? <DrawerNavigator /> : <AuthenticaionNavigator />}
    </SafeAreaProvider>
  );
};

export default Navigation;
