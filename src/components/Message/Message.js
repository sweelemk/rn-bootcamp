import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "react-native-vector-icons";
import { colors } from "../../utils/Theme";
import styles from "./Message.styles";

const Message = ({ message, retry, retryFn, onPress, onDismiss, ...props }) => {
  const [userDismissed, setUserDismissed] = useState(false);
  const getBGColor = () => {
    if (props.primary) {
      return colors.primary;
    }
    if (props.danger) {
      return colors.danger;
    }
    if (props.success) {
      return colors.success;
    }
    if (props.info) {
      return colors.info;
    }
  };
  const handleDismiss = () => {
    setUserDismissed(true);
  };
  return (
    <>
      {!userDismissed && (
        <View>
          <View
            style={[
              styles.buttonContainer,
              {
                backgroundColor: getBGColor(),
              },
              props.style,
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {message && <Text style={[styles.buttonText]}>{message}</Text>}
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
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default Message;
