import React from "react";
import { Text, StyleSheet } from "react-native";
import { THEME } from "./../theme";

export const AppText = ({ style, children }) => {
  return <Text style={[styles.default, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  default: {
    fontFamily: "yanone-regular",
    color: THEME.TEXT_COLOR,
  },
});
