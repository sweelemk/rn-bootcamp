import React from "react";
import Feather from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Box, Text } from "../../utils";

const Header = ({ title }) => {
  const navigation = useNavigation();
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      paddingHorizontal="m"
      borderBottomWidth={1}
      borderStyle="solid"
      borderColor="color5"
      paddingBottom="m"
    >
      <Box width={40} justifyContent="center">
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Feather name="menu" size={24} color="white" />
        </TouchableOpacity>
      </Box>
      <Box justifyContent="center" flex={1}>
        <Text variant="screenTitle" numberOfLines={1} textAlign="center">
          {title}
        </Text>
      </Box>
      <Box width={40} />
    </Box>
  );
};

export default Header;
