const DEFAULT_FONT_SIZE = 16;

const typography = {
  fontFamily: {
    Poppins: {
      Light: "Poppins-Light",
      SemiBold: "Poppins-SemiBold",
    },
    SquadaOne: {
      Regular: "SquadaOne-Regular",
    },
  },
  fontSize: {
    default: DEFAULT_FONT_SIZE,
    s: DEFAULT_FONT_SIZE - 2, // 14
    m: DEFAULT_FONT_SIZE, // 16
    l: DEFAULT_FONT_SIZE + 2, // 18
    xl: DEFAULT_FONT_SIZE + 3, // 19
    xxl: DEFAULT_FONT_SIZE + 5, // 21
  },

  lineHeight: {
    default: DEFAULT_FONT_SIZE,
    m: DEFAULT_FONT_SIZE, // 16
    l: DEFAULT_FONT_SIZE + 4, // 20
    xl: DEFAULT_FONT_SIZE + 7, // 23
    xxl: DEFAULT_FONT_SIZE + 10, // 26
    xxxl: DEFAULT_FONT_SIZE + 12, // 28
  },
};

export default typography;
