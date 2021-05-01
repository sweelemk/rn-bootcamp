import React, { useContext, useEffect } from "react";
import { View, Text, ScrollView, Image, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import QRCode from "react-native-qrcode-svg";
import faker from "faker";
import { AppContext } from "../../../context/Provider";
import { colors } from "../../../utils/Theme";
import { getUser } from "../../../context/actions/user";
import styles from "./BadgeScreen.styles";

faker.seed(1);

const userAvatar = faker.image.people();

const BadgeScreen = () => {
  const {
    authState: {
      data: { userId },
    },
    userState: { data: user, loading },
    userDispatch,
  } = useContext(AppContext);

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      getUser(userId)(userDispatch);
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bgColor }}>
      {loading && (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator color={colors.primary} />
        </View>
      )}
      {!loading && (
        <ScrollView
          contentContainerStyle={{
            flex: 1,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={{ uri: userAvatar }} />
          </View>
          <View style={styles.userContainer}>
            <View style={styles.row}>
              <Text style={styles.label}>User name:</Text>
              <Text style={styles.userData}>
                {user.firstName} {user.lastName}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Date of Birth:</Text>
              <Text style={styles.userData}>{user.dateOfBirth}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Member ID:</Text>
              <Text style={styles.userData}>{user.memberId}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Member Since:</Text>
              <Text style={styles.userData}>{user.memberSince}</Text>
            </View>
          </View>
          <View style={styles.qrContainer}>
            <QRCode value="www.globant.com" size={180} />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default BadgeScreen;
