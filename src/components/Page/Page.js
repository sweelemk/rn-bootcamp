import React from "react";
import { SafeAreaView, ActivityIndicator } from "react-native";
import Header from "../Header";
import { Box, useTheme } from "../../utils";
const Page = ({ children, ...props }) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="color1" {...props}>
      <SafeAreaView flex="1">
        {props.title && <Header title={props.title} />}
        {props.loading && (
          <Box flex={1} justifyContent="center" alignItems="center">
            <ActivityIndicator color={theme.colors.white} />
          </Box>
        )}
        {!props.loading && children}
      </SafeAreaView>
    </Box>
  );
};

export default Page;
