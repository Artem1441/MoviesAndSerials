import React from "react";
import { View, TouchableOpacity } from "react-native";
import { AppCursive } from "../../components/ui/AppCursive";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./welcomeStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const WelcomeScreen = ({ navigation }) => {
  const nextScreen = async () => {
    navigation.navigate("PriorityScreen");
    try {
      AsyncStorage.setItem("moviesNumbers", "0");
      AsyncStorage.setItem("serialsNumbers", "0");
      AsyncStorage.setItem("alreadyLookedMovie", JSON.stringify([]));
      AsyncStorage.setItem("watchLaterMovie", JSON.stringify([]));
      AsyncStorage.setItem("alreadyLookedSerial", JSON.stringify([]));
      AsyncStorage.setItem("watchLaterSerial", JSON.stringify([]));
    } catch (e) {
      alert(e);
    }
  };


  return (
    <View style={styles.container}>
      <AppCursive style={styles.text}>
        Добро пожаловать в мир интеллектуального контента.
      </AppCursive>
      <AppCursive style={styles.text}>
        Здесь тебя будет ждать море книг, фильмов и сериалов
      </AppCursive>

      <TouchableOpacity onPress={nextScreen} style={styles.buttonNext}>
        <AntDesign name="right" size={40} color="black" />
      </TouchableOpacity>
    </View>
  );
};
