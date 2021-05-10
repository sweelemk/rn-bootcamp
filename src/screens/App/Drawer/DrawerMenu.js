import React from "react";
import { Alert } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import logout from "../../../context/actions/logout";
import { clearUser } from "../../../context/actions/user";
import { Box, Text } from "../../../utils";
import DrawerItem from "./DrawerItem";
const category = [
  { id: "badge", label: "My badge ID", screen: "BadgeIdScreen" },
  {
    id: "history",
    label: "Book history",
    screen: "BookHistoryScreen",
  },
  {
    id: "libraries",
    label: "Look for libraries",
    screen: "LibraryScreen",
  },
];

const DrawerMenu = (props) => {
  return (
    <Box paddingTop="xl">
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
                clearUser()(props.userDispatch);
              },
            },
          ]);
        }}
      >
        <Box paddingVertical="m" paddingHorizontal="m">
          <Text variant="text">Logout</Text>
        </Box>
      </RectButton>
    </Box>
  );
};

export default DrawerMenu;
