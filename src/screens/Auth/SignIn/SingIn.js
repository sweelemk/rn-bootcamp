import React from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useContext } from "react/cjs/react.development";
import login from "../../../context/actions/login";
import { AppContext } from "../../../context/Provider";
import { USER_1 } from "../../../utils/constants";

const SignIn = ({ navigation }) => {
  const { authDispatch, authState } = useContext(AppContext);
  const onSubmit = () => {
    login(USER_1)(authDispatch);
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Sign In Screen</Text>
      <RectButton onPress={onSubmit}>
        <Text>Push To App</Text>
      </RectButton>
    </View>
  );
};

export default SignIn;
