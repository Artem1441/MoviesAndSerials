import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import { THEME } from "./theme";
import { AppText } from "./ui/AppText";
import { AppTextBold } from "./ui/AppTextBold";
import { AppCursive } from "./ui/AppCursive";
import { AppNikeFont } from "./ui/AppNikeFont";
import { moviesLogic } from "../algoritms/moviesLogic";
import { addToAsyncStorage } from "../algoritms/addToAsyncStorage";
import { getInfoFromAsyncStorage } from "../algoritms/getInfoFromAsyncStorage";
import {
  genres,
  moviesGenres,
  moviesComainGenres,
} from "./../defaultData/genres";

export const SingleItemMovie = ({ item, navigation, route }) => {
  const [data, setData] = useState(null);
  const [fits, setFits] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    getData();
    getVisible();
    // getInfoFromAsyncStorage("movie", item.id, setVisible);
  }, []);

  const getData = () => {
    setTimeout(async () => {
      try {
        const value = await AsyncStorage.getItem("moviesGenre");
        let other = false;

        if (value.includes(moviesComainGenres)) {
          other = true;
        }

        if (value !== null) {
          for (let i = 0; i < JSON.parse(value).length; i++) {
            for (let j = 0; j < item.genre_ids.length; j++) {
              if (
                JSON.parse(value)[i] == item.genre_ids[j] ||
                (!moviesGenres.includes(item.genre_ids[j]) && other)
              ) {
                setData(item);
              }
            }
          }

          moviesLogic(item, value, setFits, setData);
        }
      } catch (e) {
        console.log(e);
      }
    }, 100);
  };

  const openReview = (id, fits) => {
    navigation.navigate("MovieReviewScreen", {
      id,
      fits,
      setVisible,
    });
  };

  const getVisible = async () => {
    let alreadyLookedMovie = await AsyncStorage.getItem("alreadyLookedMovie");
    let watchLaterMovie = await AsyncStorage.getItem("watchLaterMovie");

    if (
      alreadyLookedMovie.includes(item.id) ||
      watchLaterMovie.includes(item.id)
    ) {
      setVisible(false);
    }
  };

  return (
    <View style={{ display: visible ? "flex" : "none" }}>
      <LinearGradient colors={THEME.GRADIENT_COLORS} style={styles.button}>
        <View style={styles.container}>
          {data && (
            <View style={styles.containerBlock}>
              <TouchableOpacity
                onPress={() => openReview(data.id, fits, data.title)}
              >
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
                  }}
                  style={styles.image}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => openReview(data.id, fits, data.title)}
              >
                <AppTextBold style={styles.name}>
                  {data.title}
                  {/* {data.title ? data.title : data.name} */}
                </AppTextBold>
              </TouchableOpacity>

              <AppText>
                Год:
                {/* {data.release_date ? data.release_date : data.first_air_date} */}
                {data.release_date}
              </AppText>
              <AppText>Рейтинг: {data.vote_average}</AppText>
              {item.genre_ids.map((item) => (
                <AppText key={item}>{genres[item]}</AppText>
              ))}
              {/* <AppCursive>{data.overview}</AppCursive> */}
              <AppText>
                Этот фильм подходит вам на <AppNikeFont>{fits}%</AppNikeFont>
              </AppText>

              <TouchableOpacity
                style={styles.leftBtn}
                onPress={() =>
                  addToAsyncStorage(
                    [data.id],
                    "watchLaterMovie",
                    setVisible,
                    navigation,
                    data
                  )
                }
              >
                <AppText style={styles.btnText}>Посмотреть</AppText>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.rigthBtn}
                onPress={() =>
                  addToAsyncStorage(
                    [data.id],
                    "alreadyLookedMovie",
                    setVisible,
                    navigation,
                    data
                  )
                }
              >
                <AppText style={styles.btnText}>Уже смотрел</AppText>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  image: {
    height: (Dimensions.get("screen").width - 80) * 1.5,
    width: Dimensions.get("screen").width - 80,
  },
  containerBlock: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    alignItems: "center",
    padding: 20,
    paddingTop: 40,
  },
  name: {
    fontSize: 44,
    textAlign: "center",
    marginVertical: 20,
  },
  leftBtn: {
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 20,
    bottom: 60,
  },

  rigthBtn: {
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 20,
    bottom: 60,
  },
  btnText: {
    fontSize: 20,
  },
});
