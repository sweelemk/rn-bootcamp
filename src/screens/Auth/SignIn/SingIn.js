import React, { useContext, useRef, useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Input, Logo, Message } from "../../../components";
import { login, clear } from "../../../context/actions/login";
import { AppContext } from "../../../context/Provider";
import { colors } from "../../../utils/Theme";
import styles from "./SignIn.styles";

const SignIn = ({ navigation }) => {
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
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bgColor }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          flex: 1,
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              paddingHorizontal: 20,
              flex: 1,
            }}
          >
            <View style={styles.logoContainer}>
              <Logo />
            </View>
            <View style={styles.heroContainer}>
              <Text style={styles.header}>Welcome Back,</Text>
              <Text style={styles.subHeader}>sign in to continue</Text>
            </View>
            <View style={styles.formContainer}>
              {authState.error?.error && (
                <Message
                  message={authState.error.error}
                  danger
                  onDismiss={() => {
                    clear()(authDispatch);
                  }}
                />
              )}
              <Input
                label="Member ID"
                onChangeText={(value) => onChange({ name: "memberId", value })}
                placeholder="Enter member ID"
                name="memberId"
                autoCapitalize="none"
                returnKeyType="next"
                returnKeyLabel="Next"
                onSubmitEditing={() => password.current?.focus()}
                autoCompleteType={"off"}
                autoCorrect={false}
              />
              <Input
                ref={password}
                label="Password"
                onChangeText={(value) => onChange({ name: "password", value })}
                autoCapitalize="none"
                returnKeyType="go"
                returnKeyLabel="go"
                placeholder="Enter password"
                secureTextEntry
                name="password"
              />
              <Button
                title="Sign In"
                primary
                style={{
                  marginTop: 12,
                }}
                loading={authState.loading}
                disabled={authState.loading}
                onPress={onSubmit}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
