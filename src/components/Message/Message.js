import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "react-native-vector-icons";
import { Box, Text, useTheme } from "../../utils";

const Message = ({ message, retry, retryFn, onPress, onDismiss, ...props }) => {
  const theme = useTheme();
  const [userDismissed, setUserDismissed] = useState(false);
  const getBGColor = () => {
    if (props.primary) {
      return theme.colors.color5;
    }
    if (props.danger) {
      return theme.colors.danger;
    }
    if (props.success) {
      return theme.colors.success;
    }
    if (props.info) {
      return theme.colors.info;
    }
  };
  const handleDismiss = () => {
    setUserDismissed(true);
  };
  return (
    <>
      {!userDismissed && (
        <Box>
          <Box
            height={42}
            justifyContent="space-evenly"
            borderRadius="s"
            paddingHorizontal="m"
            marginBottom="m"
            style={[
              {
                backgroundColor: getBGColor(),
              },
              props.style,
            ]}
          >
            <Box
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {message && <Text variant="text">{message}</Text>}
              {retry && (
                <TouchableOpacity onPress={retryFn}>
                  <SimpleLineIcons name="reload" size={16} color="white" />
                </TouchableOpacity>
              )}
              {typeof onDismiss === "function" && (
                <TouchableOpacity
                  onPress={() => {
                    onDismiss();
                    handleDismiss();
                  }}
                >
                  <SimpleLineIcons name="close" size={16} color="white" />
                </TouchableOpacity>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Message;
