import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

export const FindBtn = ({ navigation }) => {
  const openSelectionScreen = () => {
    navigation.navigate("FindScreen");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openSelectionScreen}>
        <SimpleLineIcons name="magnifier" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 12,
  },
});
