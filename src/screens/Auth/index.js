import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "./SignIn";

const AuthenticaionStack = createStackNavigator();

export const AuthenticaionNavigator = () => {
  return (
    <AuthenticaionStack.Navigator headerMode="none">
      <AuthenticaionStack.Screen name="SignIn" component={SignIn} />
    </AuthenticaionStack.Navigator>
  );
};
