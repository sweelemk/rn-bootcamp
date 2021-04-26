import React from "react";
import { enableScreens } from "react-native-screens";
import AppContextProvider from "./src/context/Provider";
import Navigation from "./src/navigation";

enableScreens();

function App() {
  return (
    <AppContextProvider>
      <Navigation />
    </AppContextProvider>
  );
}

export default App;
