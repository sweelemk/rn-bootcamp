import React from "react";
import { FlatList } from "react-native";
import { useLibrariesDataLoading } from "./LibraryScreen.hooks";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Box, Text, useTheme } from "../../../utils";
import { Card, Page } from "../../../components";

const LibraryScreen = ({ navigation }) => {
  const theme = useTheme();
  const { data, loading } = useLibrariesDataLoading();
  const renderData = ({ item }) => {
    return (
      <Box marginBottom="m" key={item.id}>
        <Card>
          <Box>
            <Text variant="textBold" fontSize={16}>
              {item.name}
            </Text>
            <Text variant="textSmall">
              {item.country}, {item.city}
            </Text>
            <Text variant="textSmall">
              {item.zipCode}, {item.address1}
            </Text>
          </Box>
          <Box alignItems="flex-end">
            <TouchableOpacity onPress={() => navigation.navigate("Maps")}>
              <Text
                variant="textSmall"
                style={{
                  color: theme.colors.coral,
                }}
              >
                View on Map
              </Text>
            </TouchableOpacity>
          </Box>
        </Card>
      </Box>
    );
  };
  return (
    <Page loading={loading}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.isbn}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 12,
        }}
        renderItem={renderData}
      />
    </Page>
  );
};

export default LibraryScreen;
