import React from "react";
import { enableScreens } from "react-native-screens";
import AppContextProvider from "./src/context/Provider";
import WithAxios from "./src/helpers/WithAxios";
import Navigation from "./src/navigation";

enableScreens();

function App() {
  return (
    <AppContextProvider>
      <WithAxios>
        <Navigation />
      </WithAxios>
    </AppContextProvider>
  );
}

export default App;
