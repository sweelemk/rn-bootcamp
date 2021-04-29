import { StyleSheet } from "react-native";
import { colors, fonts } from "../../utils/Theme";

export default StyleSheet.create({
  inputContainer: {
    paddingVertical: 8,
  },
  inputWrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 12,
    fontFamily: fonts.Poppins.Light,
  },
  label: {
    fontFamily: fonts.Poppins.Light,
    marginBottom: 6,
  },
  error: {
    fontFamily: fonts.Poppins.Light,
    color: colors.danger,
    paddingTop: 6,
    fontSize: 12,
  },
});
