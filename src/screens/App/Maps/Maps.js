import React from "react";
import {
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import MapView, { Marker } from "react-native-maps";
import { Box, Text } from "../../../utils";
import mapStyle from "./mapStyle";

const { height } = Dimensions.get("screen");
const BACK_BUTTON_POSITION = Platform.OS === "ios" ? 50 : 30;

const Maps = ({ route, navigation }) => {
  const coord = route.params.library;

  const marketIcon = () => {
    return <Material name="map-marker" size={48} color="coral" />;
  };
  return (
    <Box flex={1} backgroundColor="color1">
      <StatusBar hidden />
      <MapView
        style={{
          height,
        }}
        initialRegion={{
          latitude: +coord.latitude,
          longitude: +coord.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        customMapStyle={mapStyle}
      >
        <Marker
          coordinate={{
            latitude: +coord.latitude,
            longitude: +coord.longitude,
          }}
        >
          {marketIcon()}
        </Marker>
      </MapView>
      <Box position="absolute" top={BACK_BUTTON_POSITION} left={20}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Box flexDirection="row" alignItems="center">
            <Feather name="arrow-left" color="black" size={24} />
            <Text
              variant="text"
              style={{ color: "black" }}
              numberOfLines={1}
              paddingTop="xs"
              marginLeft="m"
            >
              {coord.name}
            </Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default Maps;
