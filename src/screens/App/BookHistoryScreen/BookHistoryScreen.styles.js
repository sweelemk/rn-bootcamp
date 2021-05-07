import { StyleSheet } from "react-native";
import { colors, fonts } from "../../../utils/Theme";

export default StyleSheet.create({
  cardWrapper: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.primary,
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
  },
  bookName: {
    fontFamily: fonts.Poppins.SemiBold,
    fontSize: 16,
  },
  text: {
    fontFamily: fonts.Poppins.Light,
    fontSize: 12,
    marginTop: 2,
  },
});
