import React from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

const DrawerItem = ({ label, screen, navigation }) => {
  return (
    <RectButton onPress={() => navigation.navigate(screen)}>
      <View>
        <Text>{label}</Text>
      </View>
    </RectButton>
  );
};

export default DrawerItem;
