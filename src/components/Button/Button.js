import React from "react";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import { Box, Text, useTheme } from "../../utils";

const Button = ({ type, title, loading, disabled, onPress, ...props }) => {
  const theme = useTheme();
  const getBGColor = () => {
    if (disabled) {
      return theme.colors.color5;
    }
    if (props.primary) {
      return theme.colors.coral;
    }
    if (props.danger) {
      return theme.colors.danger;
    }

    if (props.secondary) {
      return colors.secondary;
    }
  };
  return (
    <Box>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        disabled={disabled}
      >
        <Box
          flexDirection="row"
          height={42}
          justifyContent="center"
          alignItems="center"
          disabled={disabled}
          borderRadius="m"
          style={[
            {
              backgroundColor: getBGColor(),
            },
            props.style,
          ]}
        >
          {loading && (
            <ActivityIndicator
              color={props.primary ? colors.white : colors.primary}
            />
          )}
          {title && (
            <Text
              variant="text"
              style={[
                {
                  color: disabled ? "rgba(255,255,255, 0.6)" : colors.white,
                  paddingLeft: loading ? 8 : 0,
                },
              ]}
            >
              {title}
            </Text>
          )}
        </Box>
      </TouchableOpacity>
    </Box>
  );
};
export default Button;
