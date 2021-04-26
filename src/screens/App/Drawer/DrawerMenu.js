import React from "react";
import { View, Text, Alert } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import logout from "../../../context/actions/logout";
import DrawerItem from "./DrawerItem";
const category = [
  { id: "badge", label: "My badge ID", screen: "UnderConstruction" },
  {
    id: "history",
    label: "Book history",
    screen: "UnderConstruction",
  },
  {
    id: "libraries",
    label: "Look for libraries",
    screen: "UnderConstruction",
  },
];

const DrawerMenu = (props) => {
  return (
    <View>
      {category.map((item) => (
        <DrawerItem
          key={item.id}
          label={item.label}
          screen={item.screen}
          {...props}
        />
      ))}
      <RectButton
        onPress={() => {
          props.navigation.toggleDrawer();
          Alert.alert("Logout", "Are you sure you want to exit?", [
            {
              text: "Cancel",
              onPress: () => {},
            },
            {
              text: "OK",
              onPress: () => {
                logout()(props.authDispatch);
              },
            },
          ]);
        }}
      >
        <View>
          <Text>Logout</Text>
        </View>
      </RectButton>
    </View>
  );
};

export default DrawerMenu;
