import { StyleSheet } from "react-native";
import { fonts } from "../../utils/Theme";

export default StyleSheet.create({
  buttonContainer: {
    height: 42,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 4,
    marginBottom: 8,
  },
  buttonText: {
    fontFamily: fonts.Poppins.SemiBold,
  },
});
