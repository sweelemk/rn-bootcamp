import React from "react";
import { Text, View, ActivityIndicator, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLibrariesDataLoading } from "./LibraryScreen.hooks";
import { colors } from "../../../utils/Theme";
import styles from "./LibraryScreen.styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const LibraryScreen = ({ navigation }) => {
  const { data, loading } = useLibrariesDataLoading();
  const renderData = ({ item }) => {
    return (
      <View key={item.id} style={styles.cardWrapper}>
        <View>
          <Text style={styles.libName}>{item.name}</Text>
          <Text style={styles.text}>
            {item.country}, {item.city}
          </Text>
          <Text style={styles.text}>
            {item.zipCode}, {item.address1}
          </Text>
        </View>
        <View style={styles.viewOnMap}>
          <TouchableOpacity onPress={() => navigation.navigate("Maps")}>
            <Text
              style={[
                styles.text,
                {
                  color: colors.primary,
                },
              ]}
            >
              View on Map
            </Text>
          </TouchableOpacity>
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

export default LibraryScreen;
