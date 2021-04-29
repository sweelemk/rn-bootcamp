import React from "react";
import { TouchableOpacity, View, Text, ActivityIndicator } from "react-native";
import { colors } from "../../utils/Theme";
import styles from "./Button.styles";

const Button = ({ type, title, loading, disabled, onPress, ...props }) => {
  const getBGColor = () => {
    if (disabled) {
      return colors.disabled;
    }
    if (props.primary) {
      return colors.primary;
    }
    if (props.danger) {
      return colors.danger;
    }

    if (props.secondary) {
      return colors.secondary;
    }
  };
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.buttonContainer,
          {
            backgroundColor: getBGColor(),
          },
          props.style,
        ]}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {loading && (
            <ActivityIndicator
              color={props.primary ? colors.white : colors.primary}
            />
          )}
          {title && (
            <Text
              style={[
                styles.buttonText,
                {
                  color: disabled ? "rgba(255,255,255, 0.6)" : colors.white,
                  paddingLeft: loading ? 8 : 0,
                },
              ]}
            >
              {title}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Button;
