import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { moviesClick, serialsClick } from "./../algoritms/movieOrSerial";

export const RecomendationsBtn = ({
  navigation,
  moviesGenre,
  serialsGenre,
}) => {
  const [currentMovie, setCurrentMovie] = useState(null);
  const [currentSerial, setCurrentSerial] = useState(null);
  const [MoviesGenre, setMoviesGenre] = useState(false);
  const [SerialsGenre, setSerialsGenre] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    checkVisible();
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
    console.log(MoviesGenre, SerialsGenre);

    if (MoviesGenre !== false && SerialsGenre !== false) {
      setVisible(true);
      MoviesGenre !== "false" && SerialsGenre === "false"
        ? moviesClick(currentMovie, setCurrentMovie, navigation)
        : MoviesGenre === "false" && SerialsGenre !== "false"
        ? serialsClick(currentSerial, setCurrentSerial, navigation)
        : navigation.navigate("SelectionScreen");
      setMoviesGenre(false);
      setSerialsGenre(false);
    }
  }, [MoviesGenre, SerialsGenre]);

  const openSelectionScreen = async () => {
    await moviesGenre.then((value) => {
      setMoviesGenre(value);
    });

    await serialsGenre.then((value) => {
      setSerialsGenre(value);
    });
  };

  const checkVisible = async () => {
    let movies;
    let serials;
    await moviesGenre.then((value) => {
      movies = value;
    });
    await serialsGenre.then((value) => {
      serials = value;
    });
    if (movies === "false" && serials === "false") {
      setVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      {visible && (
        <TouchableOpacity onPress={openSelectionScreen}>
          <AntDesign name="switcher" size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 12,
  },
});
