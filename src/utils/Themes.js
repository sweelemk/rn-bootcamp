import {
  createBox,
  createText,
  useTheme as useReTheme,
} from "@shopify/restyle";
import { colors, spacing, borderRadius, typography } from "./style-utils";

const theme = {
  colors: colors,
  borderRadii: borderRadius,
  spacing: spacing,
  breakpoints: {},
  font: typography,
  textVariants: {
    textHero: {
      fontFamily: typography.fontFamily.SquadaOne.Regular,
      fontSize: 40,
      textTransform: "uppercase",
      color: "white",
    },
    screenTitle: {
      fontFamily: typography.fontFamily.Poppins.Light,
      fontSize: typography.fontSize.xl + 3,
      lineHeight: typography.lineHeight.xxxl,
      color: "white",
    },
    screenSubTitle: {
      fontFamily: typography.fontFamily.Poppins.SemiBold,
      fontSize: typography.fontSize.m - 2,
      lineHeight: typography.lineHeight.l - 1,
      color: "white",
    },
    text: {
      fontFamily: typography.fontFamily.Poppins.Light,
      fontSize: typography.fontSize.m - 2,
      lineHeight: typography.lineHeight.l - 1,
      color: "white",
      marginBottom: "xs",
    },
    textBold: {
      fontFamily: typography.fontFamily.Poppins.SemiBold,
      fontSize: typography.fontSize.m - 2,
      lineHeight: typography.lineHeight.l - 1,
      color: "white",
      marginBottom: "xs",
    },
    textSmall: {
      fontFamily: typography.fontFamily.Poppins.Light,
      fontSize: typography.fontSize.m - 4,
      lineHeight: typography.lineHeight.l - 1,
      color: "white",
      marginBottom: "xs",
    },
    error: {
      fontFamily: typography.fontFamily.Poppins.Light,
      color: "danger",
      fontSize: typography.fontSize.m - 4,
    },
  },
};

export const Box = createBox();
export const Text = createText();
export const useTheme = () => useReTheme();
export default theme;
