import React, { useState, forwardRef } from "react";
import { TextInput } from "react-native";
import { Text, Box, useTheme } from "../../utils";

const Input = forwardRef(
  ({ onchangeText, value, style, label, error, ...props }, ref) => {
    const theme = useTheme();
    const [focused, setFocused] = useState();
    const getBorder = () => {
      if (focused) {
        return theme.colors.color5;
      }
      if (error) {
        return theme.colors.danger;
      } else {
        return theme.colors.color5;
      }
    };
    return (
      <Box>
        {label && (
          <Text variant="text" marginBottom="s">
            {label}
          </Text>
        )}
        <Box
          height={42}
          borderWidth={1}
          borderStyle="solid"
          borderRadius="m"
          style={{ borderColor: getBorder() }}
        >
          <TextInput
            style={[
              {
                flex: 1,
                paddingHorizontal: theme.spacing.m - 2,
                fontFamily: theme.font.fontFamily.Poppins.Light,
                color: theme.colors.white,
              },
              style,
            ]}
            value={value}
            onChange={onchangeText}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            {...{ ref }}
            {...props}
          />
        </Box>
        {error && (
          <Box paddingVertical="xs">
            <Text variant="error">{error}</Text>
          </Box>
        )}
      </Box>
    );
  }
);

export default Input;
