import { StyleSheet } from "react-native";
import { colors, fonts } from "../../utils/Theme";

export default StyleSheet.create({
  buttonContainer: {
    height: 42,
    justifyContent: "space-evenly",
    borderRadius: 4,
    marginBottom: 8,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontFamily: fonts.Poppins.Light,
    color: colors.white,
  },
});
