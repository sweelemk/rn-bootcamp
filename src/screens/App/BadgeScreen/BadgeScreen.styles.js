import { StyleSheet } from "react-native";
import { colors, fonts } from "../../../utils/Theme";

const AVATER_SIZE = 160;

export default StyleSheet.create({
  avatarContainer: {
    marginTop: 48,
    alignItems: "center",
    marginBottom: 48,
  },
  avatar: {
    width: AVATER_SIZE,
    height: AVATER_SIZE,
    borderRadius: AVATER_SIZE,
    marginBottom: 12,
  },
  userContainer: {
    marginBottom: 48,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: colors.black20,
    paddingHorizontal: 20,
  },
  label: {
    fontFamily: fonts.Poppins.Light,
    fontSize: 16,
    color: colors.black,
  },
  userData: {
    fontFamily: fonts.Poppins.Light,
    fontSize: 16,
    color: colors.black,
  },
  qrContainer: {
    alignItems: "center",
  },
});
