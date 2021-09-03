import React, { useState, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { styles } from "./selectionStyle";
import { AppText } from "./../../components/ui/AppText";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { moviesClick, serialsClick } from "./../../algoritms/movieOrSerial";

export const SelectionScreen = ({ navigation }) => {
  const [currentMovie, setCurrentMovie] = useState(null);
  const [currentSerial, setCurrentSerial] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      try {
        const movie = await AsyncStorage.getItem("moviesNumbers");
        const serial = await AsyncStorage.getItem("serialsNumbers");
        if (movie) {
          setCurrentMovie(movie);
        }
        if (serial) {
          setCurrentSerial(serial);
        }
      } catch (e) {
        console.log(e);
      }
    }, 100);
  }, []);

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Выберите раздел для подборки</AppText>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => moviesClick(currentMovie, setCurrentMovie, navigation)}
        >
          <AppText style={styles.buttonText}>Фильмы</AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            serialsClick(currentSerial, setCurrentSerial, navigation)
          }
        >
          <AppText style={styles.buttonText}>Сериалы</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};
