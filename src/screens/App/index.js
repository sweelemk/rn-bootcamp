import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerContent, { DRAWER_WIDTH } from "./Drawer";
import { useContext } from "react/cjs/react.development";
import { AppContext } from "../../context/Provider";
import { BadgeScreen } from "./BadgeScreen";
import { BookHistoryScreen } from "./BookHistoryScreen";
import { LibraryScreen } from "./LibraryScreen";
import Maps from "./Maps/Maps";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { authDispatch, userDispatch } = useContext(AppContext);
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContent
          {...props}
          authDispatch={authDispatch}
          userDispatch={userDispatch}
        />
      )}
      drawerStyle={{ width: DRAWER_WIDTH }}
    >
      <Drawer.Screen name="BadgeIdScreen" component={BadgeScreen} />
      <Drawer.Screen name="BookHistoryScreen" component={BookHistoryScreen} />
      <Drawer.Screen name="LibraryScreen" component={LibraryScreen} />
    </Drawer.Navigator>
  );
};

export const StackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none" mode="modal">
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="Maps" component={Maps} />
    </Stack.Navigator>
  );
};
