import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { THEME } from "./theme";

export const Menu = ({ navigation, active }) => {
  const onPressHome = () => {
    navigation.navigate("HomeScreen");
  };

  const onPressAdd = () => {
    navigation.navigate("AddScreen");
  };

  const onPressProfile = () => {
    navigation.navigate("ProfileScreen");
  };

  return (
    <View style={styles.menu}>
      <View style={styles.menu_item}>
        <TouchableOpacity onPress={onPressHome}>
          <FontAwesome
            name="home"
            size={24}
            color={
              active === "HomeScreen"
                ? THEME.BLACK_COLOR
                : THEME.OPACITY_BLACK_COLOR
            }
          />
        </TouchableOpacity>
      </View>

      <View style={styles.menu_item}>
        <TouchableOpacity style={styles.menu_item_button} onPress={onPressAdd}>
          <AntDesign name="pluscircle" size={36} color={THEME.BLACK_COLOR} />
        </TouchableOpacity>
      </View>

      <View style={styles.menu_item}>
        <TouchableOpacity onPress={onPressProfile}>
          <AntDesign
            name="user"
            size={24}
            color={
              active === "ProfileScreen"
                ? THEME.BLACK_COLOR
                : THEME.OPACITY_BLACK_COLOR
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    height: 48,
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: THEME.YELLOW_COLOR,
  },
  menu_item: {
    width: "33%",
    alignItems: "center",
    height: 48,
    justifyContent: "center",
  },
});
