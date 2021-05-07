import React from "react";
import { Text, View, ActivityIndicator, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../../utils/Theme";
import styles from "./BookHistoryScreen.styles";
import { useHistoryDataLoading } from "./BookHistory.hooks";

const ACTIVE_STATUS = "ACTIVE";

const BookScreen = () => {
  const { data, loading } = useHistoryDataLoading();
  const renderData = ({ item }) => {
    return (
      <View
        key={item.isbn}
        style={[
          styles.cardWrapper,
          {
            borderColor:
              item.status === ACTIVE_STATUS ? colors.success : colors.info,
          },
        ]}
      >
        <Text style={styles.bookName}>{item.name}</Text>
        <Text style={styles.text}>Author: {item.author}</Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={[
              styles.text,
              {
                marginRight: 12,
              },
            ]}
          >
            Date taken: {item.takenDate}
          </Text>
          {item.status === ACTIVE_STATUS ? (
            <Text style={styles.text}>Return before: {item.returnBefore}</Text>
          ) : (
            <Text style={styles.text}>Returned: {item.returnedDate}</Text>
          )}
        </View>
      </View>
    );
  };
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
        <FlatList
          data={data}
          keyExtractor={(item) => item.isbn}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 12,
          }}
          renderItem={renderData}
        />
      )}
    </SafeAreaView>
  );
};

export default BookScreen;
