import React, { useContext, useEffect } from "react";
import { ScrollView, Image } from "react-native";
import QRCode from "react-native-qrcode-svg";
import faker from "faker";
import { AppContext } from "../../../context/Provider";
import { getUser } from "../../../context/actions/user";
import { Page } from "../../../components";
import { Box, Text } from "../../../utils";

faker.seed(1);
const AVATER_SIZE = 160;

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

  const Row = ({ topBorder, children }) => {
    return (
      <Box
        flexDirection="row"
        justifyContent="space-between"
        padding="m"
        borderBottomWidth={1}
        borderColor="color3"
        borderTopWidth={topBorder ? 1 : 0}
      >
        {children}
      </Box>
    );
  };

  return (
    <Page loading={loading}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Box marginTop="xl" alignItems="center" marginBottom="xl">
          <Image
            style={{
              width: AVATER_SIZE,
              height: AVATER_SIZE,
              borderRadius: AVATER_SIZE,
            }}
            source={{ uri: userAvatar }}
          />
        </Box>
        <Box marginBottom="xl">
          <Row topBorder>
            <Text variant="text">User name:</Text>
            <Text variant="text">
              {user.firstName} {user.lastName}
            </Text>
          </Row>
          <Row>
            <Text variant="text">Date of Birth:</Text>
            <Text variant="text">{user.dateOfBirth}</Text>
          </Row>
          <Row>
            <Text variant="text">Member ID:</Text>
            <Text variant="text">{user.memberId}</Text>
          </Row>
          <Row>
            <Text variant="text">Member Since:</Text>
            <Text variant="text">{user.memberSince}</Text>
          </Row>
        </Box>
        <Box alignItems="center">
          <QRCode value="www.globant.com" size={180} />
        </Box>
      </ScrollView>
    </Page>
  );
};

export default BadgeScreen;
