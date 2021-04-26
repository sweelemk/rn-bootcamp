import React from "react";
import { View } from "react-native";
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
    </View>
  );
};

export default DrawerMenu;
