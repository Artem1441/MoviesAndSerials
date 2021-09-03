import React from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { THEME } from "./theme";
import { AppText } from "./ui/AppText";
import { AntDesign } from "@expo/vector-icons";

export const EndOfTheList = ({ navigation }) => {
  return (
    <LinearGradient colors={THEME.GRADIENT_COLORS} style={styles.button}>
      <View style={styles.container}>
        <AppText style={styles.text}>По вашим жанрам на этот раз всё</AppText>

        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <AntDesign name="back" size={20} color="black" />
          <AppText style={styles.btnText}>Вернуться домой</AppText>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  text: {
    fontSize: 32,
    textAlign: "center",
  },
  backBtn: {
    position: "absolute",
    bottom: 80,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    marginLeft: 5,
  },
});
