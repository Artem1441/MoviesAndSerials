import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { styles } from "./findStyle";
import { LinearGradient } from "expo-linear-gradient";
import { THEME } from "../../components/theme";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AppNikeFont } from "./../../components/ui/AppNikeFont";
import { AppTextBold } from "./../../components/ui/AppTextBold";
import { moviesGenre, serialsGenre } from "./../../defaultData/asyncStorage";

import { MovieSearchItem } from "../../components/MovieSearchItem";
import { ActorSearchItem } from "./../../components/ActorSearchItem";
import { SerialSearchItem } from "../../components/SerialSearchItem";
import { actors } from "./../../defaultData/actors";

export const FindScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [moviesData, setMoviesData] = useState();
  const [serialsData, setSerialsData] = useState();
  const [actorsData, setActorsData] = useState();
  const [wait, setWait] = useState(false);
  const [genreMovie, setGenreMovie] = useState();
  const [genreSerial, setGenreSerial] = useState();
  moviesGenre().then((res) => setGenreMovie(res));
  serialsGenre().then((res) => setGenreSerial(res));

  let allMovies = [];
  let allSerials = [];
  let allActors = [];

  useEffect(() => {
    input === "" && basedData();
  }, [input]);

  const onChangeText = (prev) => {
    setInput(prev);
  };

  const sortByPopularity = (elem) => {
    elem.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (a.popularity > b.popularity) {
        return -1;
      }
    });

    //check for uniqueness of elements
    let unic = [];
    let unicId = [];
    elem.forEach((element) => {
      if (!unicId.includes(element.id)) {
        unic.push(element);
        unicId.push(element.id);
      }
    });
    return unic;
    // logic from https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  };

  const basedData = () => {
    const movieUrl = `https://api.themoviedb.org/3/movie/popular?api_key=1cf50e6248dc270629e802686245c2c8&language=ru&page=1`;
    const serialUrl = `https://api.themoviedb.org/3/tv/popular?api_key=1cf50e6248dc270629e802686245c2c8&language=ru&page=1`;
    allMovies = [];
    allSerials = [];
    allActors = [];

    fetch(movieUrl)
      .then((res) => res.json())
      .then((data) => {
        data.results.map((item) => allMovies.push(item));
        setMoviesData(allMovies);
      });

    fetch(serialUrl)
      .then((res) => res.json())
      .then((data) => {
        data.results.map((item) => allSerials.push(item));
        setSerialsData(allSerials);
      });
    allActors = actors;

    setActorsData(actors);
  };

  const translit = (word) => {
    var answer = "";
    var converter = {
      а: "a",
      б: "b",
      в: "v",
      г: "g",
      д: "d",
      е: "e",
      ё: "e",
      ж: "zh",
      з: "z",
      и: "i",
      й: "y",
      к: "k",
      л: "l",
      м: "m",
      н: "n",
      о: "o",
      п: "p",
      р: "r",
      с: "s",
      т: "t",
      у: "u",
      ф: "f",
      х: "h",
      ц: "c",
      ч: "ch",
      ш: "sh",
      щ: "sch",
      ь: "",
      ы: "y",
      ъ: "",
      э: "e",
      ю: "yu",
      я: "ya",

      А: "A",
      Б: "B",
      В: "V",
      Г: "G",
      Д: "D",
      Е: "E",
      Ё: "E",
      Ж: "Zh",
      З: "Z",
      И: "I",
      Й: "Y",
      К: "K",
      Л: "L",
      М: "M",
      Н: "N",
      О: "O",
      П: "P",
      Р: "R",
      С: "S",
      Т: "T",
      У: "U",
      Ф: "F",
      Х: "H",
      Ц: "C",
      Ч: "Ch",
      Ш: "Sh",
      Щ: "Sch",
      Ь: "",
      Ы: "Y",
      Ъ: "",
      Э: "E",
      Ю: "Yu",
      Я: "Ya",
    };
    for (var i = 0; i < word.length; ++i) {
      if (converter[word[i]] == undefined) {
        answer += word[i];
      } else {
        answer += converter[word[i]];
      }
    }
    return answer;
  };

  const queryFunc = () => {
    Keyboard.dismiss();
    setWait(true);
    const prev = input;
    const url = `https://api.themoviedb.org/3/search/multi?api_key=1cf50e6248dc270629e802686245c2c8&query=${prev}&language=ru`;
    const englishUrl = `https://api.themoviedb.org/3/search/multi?api_key=1cf50e6248dc270629e802686245c2c8&query=${translit(
      prev
    )}&language=ru`;
    allMovies = [];
    allSerials = [];
    allActors = [];

    if (prev.length > 0) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.results !== undefined) {
            data.results.map((item) =>
              item.media_type === "movie"
                ? allMovies.push(item)
                : item.media_type === "tv"
                ? allSerials.push(item)
                : allActors.push(item)
            );
          }

          fetch(englishUrl)
            .then((res) => res.json())
            .then((data) => {
              if (data.results !== undefined) {
                data.results.map((item) =>
                  item.media_type === "movie"
                    ? allMovies.push(item)
                    : item.media_type === "tv"
                    ? allSerials.push(item)
                    : allActors.push(item)
                );
              }
              setActorsData(sortByPopularity(allActors));
              setMoviesData(sortByPopularity(allMovies));
              setSerialsData(sortByPopularity(allSerials));
              setWait(false);
            });
        });
    }
  };

  return (
    <LinearGradient colors={THEME.GRADIENT_COLORS} style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        {/* keyboardShouldPersistTaps='handled' - to touch when Keyboard is open */}
        <View style={styles.inputBlock}>
          <TextInput
            style={styles.inputSearch}
            placeholder="Введите название фильма, сериала или актёра"
            onChangeText={(prev) => onChangeText(prev)}
            value={input}
            onSubmitEditing={queryFunc}
          />
          <TouchableOpacity onPress={queryFunc} style={styles.inputBtn}>
            <SimpleLineIcons name="magnifier" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {wait ? (
          <Text>Подождите</Text>
        ) : (
          <View>
            {moviesData !== undefined && moviesData.length > 0 && (
              <View>
                <AppTextBold style={styles.blocksText}>Кино</AppTextBold>
                <View style={styles.block}>
                  <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={moviesData}
                    renderItem={({ item }) => {
                      return (
                        <MovieSearchItem
                          item={item}
                          genreMovie={genreMovie}
                          navigation={navigation}
                        />
                      );
                    }}
                    keyExtractor={(item) => item.id.toString()}
                  />
                </View>
              </View>
            )}

            {serialsData !== undefined && serialsData.length > 0 && (
              <View>
                <AppTextBold style={styles.blocksText}>Сериалы</AppTextBold>
                <View style={styles.block}>
                  <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={serialsData}
                    renderItem={({ item }) => {
                      return (
                        <SerialSearchItem
                          item={item}
                          genreSerial={genreSerial}
                          navigation={navigation}
                        />
                      );
                    }}
                    keyExtractor={(item) => item.id.toString()}
                  />
                </View>
              </View>
            )}

            {actorsData !== undefined && actorsData.length > 0 && (
              <View>
                <AppTextBold style={styles.blocksText}>Актёры</AppTextBold>
                <View style={styles.block}>
                  <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={actorsData}
                    renderItem={({ item }) => {
                      return (
                        <ActorSearchItem item={item} navigation={navigation} />
                      );
                    }}
                    keyExtractor={(item) => item.id.toString()}
                  />
                </View>
              </View>
            )}
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
};
