import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { AppText } from "../../components/ui/AppText";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./priorityStyle";

import { RadioButtonContainer } from "../../components/RadioButtonContainer";

export const PriorityScreen = ({ navigation }) => {
  const [movie, setMovie] = useState("1");
  const [serial, setSerial] = useState("2");

  const chooseFunc = (setFunc, prev, next) => {
    setFunc(next);
    if (movie === next) {
      setMovie(prev);
    } else {
      setSerial(prev);
    }
  };

  const nextScreen = async () => {
    navigation.navigate("MoviesScreen");
    try {
      await AsyncStorage.setItem(
        "priorityItems",
        JSON.stringify({ movie, serial })
      );
    } catch (e) {
      alert(e);
    }
  };

  const backScreen = () => {
    navigation.navigate("WelcomeScreen");
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.text}>Выберите приоритетность:</AppText>
      <View style={styles.centerContent}>
        <RadioButtonContainer
          type={movie}
          setType={setMovie}
          chooseFunc={chooseFunc}
          name="Фильмы"
        />
        <RadioButtonContainer
          type={serial}
          setType={setSerial}
          chooseFunc={chooseFunc}
          name="Сериалы"
        />
      </View>
      <TouchableOpacity onPress={nextScreen} style={styles.buttonNext}>
        <AntDesign name="right" size={40} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={backScreen} style={styles.buttonBack}>
        <AntDesign name="left" size={40} color="black" />
      </TouchableOpacity>
    </View>
  );
};
