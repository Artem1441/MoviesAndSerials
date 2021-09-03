import React from "react";
import { StyleSheet, View, CheckBox, TouchableOpacity } from "react-native";
import { AppText } from "./ui/AppText";

export const CheckboxContainer = ({ type, setType, name }) => {
  return (
    <View style={styles.checkboxContainer}>
      <CheckBox value={type} onValueChange={setType} style={styles.checkbox} />
      <TouchableOpacity onPress={setType}>
        <AppText style={styles.title}>{name}</AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  title: {
    fontSize: 20,
    marginRight: 10,
  },
  checkbox: {
    marginRight: 10,
  },
});
