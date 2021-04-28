import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "./HomeScreen";
import { AboutScreen } from "./AboutScreen";
import DrawerContent, { DRAWER_WIDTH } from "./Drawer";
import UnderConstruction from "./UnderConstruction/UnderConstruction";
import { useContext } from "react/cjs/react.development";
import { AppContext } from "../../context/Provider";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        tabBarLabel: "Home",
      }}
    />
    <Tab.Screen
      name="AboutScreen"
      component={AboutScreen}
      options={{
        tabBarLabel: "About",
      }}
    />
  </Tab.Navigator>
);

export const DrawerNavigator = () => {
  const { authDispatch } = useContext(AppContext);
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContent {...props} authDispatch={authDispatch} />
      )}
      drawerStyle={{ width: DRAWER_WIDTH, paddingHorizontal: 20 }}
    >
      <Drawer.Screen name="Home" component={MainTabNavigator} />
      <Drawer.Screen name="UnderConstruction" component={UnderConstruction} />
    </Drawer.Navigator>
  );
};
