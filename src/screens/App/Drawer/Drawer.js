import React from "react";
import { Dimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DrawerMenu from "./DrawerMenu";

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;

const Drawer = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerMenu {...props} />
    </SafeAreaView>
  );
};

export default Drawer;
