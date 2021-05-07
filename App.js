import React from "react";
import { StatusBar } from "react-native";
import { enableScreens } from "react-native-screens";
import AppContextProvider from "./src/context/Provider";
import WithAxios from "./src/helpers/WithAxios";
import Navigation from "./src/navigation";
import { LoadAssets } from "./src/utils";

const fonts = {
  "Poppins-Light": require("./assets/fonts/Poppins-Light.otf"),
  "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.otf"),
  "SquadaOne-Regular": require("./assets/fonts/SquadaOne-Regular.otf"),
};

enableScreens();

function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <StatusBar barStyle="dark-content" />
      <AppContextProvider>
        <WithAxios>
          <Navigation />
        </WithAxios>
      </AppContextProvider>
    </LoadAssets>
  );
}

export default App;
