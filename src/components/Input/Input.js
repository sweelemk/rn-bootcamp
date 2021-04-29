import React, { useState, forwardRef } from "react";
import { TextInput, View, Text } from "react-native";
import { colors } from "../../utils/Theme";
import styles from "./Input.styles";

const Input = forwardRef(
  ({ onchangeText, value, style, label, error, ...props }, ref) => {
    const [focused, setFocused] = useState();
    const getBorder = () => {
      if (focused) {
        return colors.primary;
      }
      if (error) {
        return colors.danger;
      } else {
        return colors.darkGrey;
      }
    };
    return (
      <View style={styles.inputContainer}>
        {label && <Text style={styles.label}>{label}</Text>}
        <View style={[styles.inputWrapper, { borderColor: getBorder() }]}>
          <TextInput
            style={[styles.textInput, style]}
            value={value}
            onChange={onchangeText}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            {...{ ref }}
            {...props}
          />
        </View>
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    );
  }
);

export default Input;
