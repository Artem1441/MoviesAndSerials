import React from "react";
import { StyleSheet, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { AppText } from "./ui/AppText";

export const RadioButtonContainer = ({ type, setType, chooseFunc, name }) => {
  return (
    <View style={styles.boxContainer}>
      <AppText style={styles.listText}>
        {name} {type === "1" ? "нравятся больше" : "нравятся меньше"}
      </AppText>
      <View style={styles.radioButtons}>
        <RadioButton
          value="1"
          status={type === "1" ? "checked" : "unchecked"}
          onPress={() => chooseFunc(setType, type, "1")}
        />
        <RadioButton
          value="2"
          status={type === "2" ? "checked" : "unchecked"}
          onPress={() => chooseFunc(setType, type, "2")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    borderBottomColor: "#ffc107",
    borderBottomWidth: 3,
  },
  listText: {
    fontSize: 18,
    marginRight: 20,
  },
  radioButtons: {
    flexDirection: "row",
  },
});
