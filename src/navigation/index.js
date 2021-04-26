import React, { useContext } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LoadAssets } from "../utils";
import { AuthenticaionNavigator } from "../screens/Auth";
import { DrawerNavigator } from "../screens/App";
import { AppContext } from "../context/Provider";
const fonts = {
  "Montserrat-Regular": require("../../assets/fonts/Montserrat-Regular.otf"),
  "Montserrat-Light": require("../../assets/fonts/Montserrat-Light.otf"),
  "Montserrat-Medium": require("../../assets/fonts/Montserrat-Medium.otf"),
  "Montserrat-Bold": require("../../assets/fonts/Montserrat-Bold.otf"),
};

const Navigation = () => {
  const state = useContext(AppContext);
  const {
    authState: { isLoggedIn },
  } = state;
  return (
    <LoadAssets {...{ fonts }}>
      <SafeAreaProvider>
        {isLoggedIn ? <DrawerNavigator /> : <AuthenticaionNavigator />}
      </SafeAreaProvider>
    </LoadAssets>
  );
};

export default Navigation;
