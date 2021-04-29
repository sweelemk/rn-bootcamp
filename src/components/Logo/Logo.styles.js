import { StyleSheet } from "react-native";
import { colors, fonts } from "../../utils/Theme";

export default StyleSheet.create({
  mainText: {
    fontFamily: fonts.SquadaOne.Regular,
    fontSize: 40,
    textTransform: "uppercase",
  },
  secondaryText: {
    color: colors.primary,
  },
});
