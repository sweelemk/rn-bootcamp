import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Box, Text } from "../../../utils";

const DrawerItem = ({ label, screen, navigation }) => {
  return (
    <RectButton onPress={() => navigation.navigate(screen)}>
      <Box paddingHorizontal="m" paddingVertical="m">
        <Text variant="text">{label}</Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;
