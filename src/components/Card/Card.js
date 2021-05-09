import React from "react";
import { Box, useTheme } from "../../utils";

const Card = ({ color, children }) => {
  const theme = useTheme();
  return (
    <Box
      borderWidth={1}
      borderStyle="solid"
      padding="m"
      borderRadius="m"
      style={{
        borderColor: color ? color : theme.colors.color3,
      }}
    >
      {children}
    </Box>
  );
};

export default Card;
