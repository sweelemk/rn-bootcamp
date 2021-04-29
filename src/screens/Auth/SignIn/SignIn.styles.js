import { StyleSheet } from "react-native";
import { colors, fonts } from "../../../utils/Theme";

export default StyleSheet.create({
  logoContainer: {
    justifyContent: "center",
    marginTop: 30,
  },
  heroContainer: {
    flex: 1,
    marginTop: 12,
  },
  formContainer: {
    flex: 4,
  },
  header: {
    fontFamily: fonts.Poppins.Light,
    fontSize: 24,
  },
  subHeader: {
    fontFamily: fonts.Poppins.Light,
    fontSize: 14,
    color: colors.primary,
  },
});
