import React from "react";
import { Text, StyleSheet } from "react-native";
import { THEME } from "./../theme";

export const AppCursive = ({ style, children }) => {
  return <Text style={[styles.default, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  default: {
    fontFamily: "caveat-regular",
    color: THEME.TEXT_COLOR,
  },
});
