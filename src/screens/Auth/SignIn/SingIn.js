import React from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

const SignIn = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Sign In Screen</Text>
      <RectButton onPress={() => navigation.navigate("Home")}>
        <Text>Push To App</Text>
      </RectButton>
    </View>
  );
};

export default SignIn;
