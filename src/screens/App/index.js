import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent, { DRAWER_WIDTH } from "./Drawer";
import UnderConstruction from "./UnderConstruction/UnderConstruction";
import { useContext } from "react/cjs/react.development";
import { AppContext } from "../../context/Provider";
import { BadgeScreen } from "./BadgeScreen";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { authDispatch } = useContext(AppContext);
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContent {...props} authDispatch={authDispatch} />
      )}
      drawerStyle={{ width: DRAWER_WIDTH, paddingHorizontal: 20 }}
    >
      <Drawer.Screen name="BadgeIdScreen" component={BadgeScreen} />
      <Drawer.Screen name="UnderConstruction" component={UnderConstruction} />
    </Drawer.Navigator>
  );
};
