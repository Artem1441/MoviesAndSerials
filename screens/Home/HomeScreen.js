import React, { useState, useLayoutEffect, useEffect } from "react";
import { Text, View } from "react-native";
import { styles } from "./homeStyle";
import { headerStyle } from "./../../components/globalStyle/headerStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { LogoBtn } from "../../components/LogoBtn";
import { RecomendationsBtn } from "../../components/RecomendationsBtn";
import { FindBtn } from "../../components/FindBtn";
import { Menu } from "../../components/Menu";

export const HomeScreen = ({ navigation }) => {
  const [moviesGenre, setMoviesGenre] = useState("false");
  const [serialsGenre, setSerialsGenre] = useState("false");

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("moviesNumbers");
      alert(value);
    } catch (e) {
      alert(e);
    }
  };
  // getData();

  useLayoutEffect(() => {

    navigation.setOptions({
      headerTitleAlign: "center",
      headerStyle: headerStyle,
      headerTitle: () => <LogoBtn />,
      headerLeft: () => (
        <RecomendationsBtn
          navigation={navigation}
          moviesGenre={AsyncStorage.getItem("moviesGenre").then((value) => {
            return value;
          })}
          serialsGenre={AsyncStorage.getItem("serialsGenre").then((value) => {
            return value;
          })}
        />
      ),
      headerRight: () => <FindBtn navigation={navigation} />,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Menu navigation={navigation} active={"HomeScreen"} />
    </View>
  );
};
