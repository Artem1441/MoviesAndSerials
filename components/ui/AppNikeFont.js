import React from "react";
import { Text, StyleSheet } from "react-native";
import { THEME } from "./../theme";


export const AppNikeFont = ({ style, children }) => {
  return <Text style={[styles.default, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  default: {
    fontFamily: "nike-font",
    color: THEME.TEXT_COLOR,

  },
});
