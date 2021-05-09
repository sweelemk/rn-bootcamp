import React from "react";
import { FlatList } from "react-native";
import { useHistoryDataLoading } from "./BookHistory.hooks";
import { Card, Page } from "../../../components";
import { Box, Text, useTheme } from "../../../utils";

const ACTIVE_STATUS = "ACTIVE";

const BookScreen = () => {
  const theme = useTheme();
  const { data, loading } = useHistoryDataLoading();
  const renderData = ({ item }) => {
    return (
      <Box marginBottom="m" key={item.isbn}>
        <Card
          color={
            item.status === ACTIVE_STATUS
              ? theme.colors.success
              : theme.colors.warning
          }
        >
          <Text variant="textBold" fontSize={16}>
            {item.name}
          </Text>
          <Text variant="textSmall">Author: {item.author}</Text>
          <Box flexDirection="row">
            <Text variant="textSmall" marginRight="s">
              Date taken: {item.takenDate}
            </Text>
            {item.status === ACTIVE_STATUS ? (
              <Text variant="textSmall">
                Return before: {item.returnBefore}
              </Text>
            ) : (
              <Text variant="textSmall">Returned: {item.returnedDate}</Text>
            )}
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

export default BookScreen;
