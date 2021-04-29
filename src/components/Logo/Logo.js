import React from "react";
import { View, Text } from "react-native";
import styles from "./Logo.styles";

const Logo = () => {
  return (
    <View>
      <Text style={styles.mainText}>
        Bootcamp<Text style={styles.secondaryText}>Library</Text>
      </Text>
    </View>
  );
};
export default Logo;
