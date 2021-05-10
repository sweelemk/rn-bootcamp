import React from "react";
import { Dimensions, SafeAreaView } from "react-native";
import { Box } from "../../../utils";
import DrawerMenu from "./DrawerMenu";

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;

const Drawer = (props) => {
  return (
    <Box flex={1} backgroundColor="color1">
      <SafeAreaView style={{ flex: 1 }}>
        <DrawerMenu {...props} />
      </SafeAreaView>
    </Box>
  );
};

export default Drawer;
