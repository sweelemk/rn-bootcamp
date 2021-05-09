import React, { useContext, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import { Box, Text } from "../../../utils";
import { Button, Input, Logo, Message, Page } from "../../../components";
import { login, clear } from "../../../context/actions/login";
import { AppContext } from "../../../context/Provider";

const SignIn = () => {
  const password = useRef(null);
  const { authDispatch, authState } = useContext(AppContext);
  const [form, setForm] = useState({});
  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };
  const onSubmit = () => {
    login(form)(authDispatch);
  };
  return (
    <Page paddingTop="xxl">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          flex: 1,
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Box paddingHorizontal="m" flex={1}>
            <Box marginTop="xl" justifyContent="center">
              <Logo />
            </Box>
            <Box flex={1} marginTop="m">
              <Text variant="screenTitle">Welcome Back,</Text>
              <Text variant="text">sign in to continue</Text>
            </Box>
            <Box flex={5}>
              {authState.error?.error && (
                <Message
                  message={authState.error.error}
                  danger
                  onDismiss={() => {
                    clear()(authDispatch);
                  }}
                />
              )}
              <Box marginBottom="m">
                <Input
                  label="Member ID"
                  onChangeText={(value) =>
                    onChange({ name: "memberId", value })
                  }
                  placeholder="Enter member ID"
                  name="memberId"
                  autoCapitalize="none"
                  returnKeyType="next"
                  returnKeyLabel="Next"
                  onSubmitEditing={() => password.current?.focus()}
                  autoCompleteType={"off"}
                  autoCorrect={false}
                />
              </Box>
              <Box marginBottom="l">
                <Input
                  ref={password}
                  label="Password"
                  onChangeText={(value) =>
                    onChange({ name: "password", value })
                  }
                  autoCapitalize="none"
                  returnKeyType="go"
                  returnKeyLabel="go"
                  placeholder="Enter password"
                  secureTextEntry
                  name="password"
                  onSubmitEditing={onSubmit}
                />
              </Box>
              <Box>
                <Button
                  title="Sign In"
                  primary
                  loading={authState.loading}
                  disabled={authState.loading}
                  onPress={onSubmit}
                />
              </Box>
            </Box>
          </Box>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Page>
  );
};

export default SignIn;
