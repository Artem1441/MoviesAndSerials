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
import { serilasLogic } from "./../algoritms/serilalsLogic";
import {
  genres,
  serialsGenres,
  serialsComainGenres,
} from "./../defaultData/genres";
import { addToAsyncStorage } from "../algoritms/addToAsyncStorage";
import { getInfoFromAsyncStorage } from "../algoritms/getInfoFromAsyncStorage";

export const SingleItemSerial = ({ item, navigation, route }) => {
  const [data, setData] = useState(null);
  const [fits, setFits] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    getData();
    getInfoFromAsyncStorage("serial", item.id, setVisible);
  }, []);

  const getData = () => {
    setTimeout(async () => {
      try {
        const value = await AsyncStorage.getItem("serialsGenre");
        let other = false;

        if (value.includes(serialsComainGenres)) {
          other = true;
        }

        if (value !== null) {
          for (let i = 0; i < JSON.parse(value).length; i++) {
            for (let j = 0; j < item.genre_ids.length; j++) {
              if (
                JSON.parse(value)[i] == item.genre_ids[j] ||
                (!serialsGenres.includes(item.genre_ids[j]) && other)
              ) {
                setData(item);
              }
            }
          }
          serilasLogic(item, value, setFits, setData);
          serilasLogic(item, value, setFits, setData);
        }
      } catch (e) {
        console.log(e);
      }
    }, 100);
  };

  const openReview = (id, fits) => {
    navigation.navigate("SerialReviewScreen", {
      id,
      fits,
      setVisible,
    });
  };

  return (
    <View style={{ display: visible ? "flex" : "none" }}>
      <LinearGradient colors={THEME.GRADIENT_COLORS} style={styles.button}>
        <View style={styles.container}>
          {data && (
            <View style={styles.containerBlock}>
              <TouchableOpacity onPress={() => openReview(data.id, fits)}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
                  }}
                  style={styles.image}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openReview(data.id, fits)}>
                <AppTextBold style={styles.name}>
                  {data.title ? data.title : data.name}
                </AppTextBold>
              </TouchableOpacity>

              <AppText>
                Год:
                {data.first_air_date}
              </AppText>
              <AppText>Рейтинг: {data.vote_average}</AppText>
              {item.genre_ids.map((item) => (
                <AppText key={item}>{genres[item]}</AppText>
              ))}
              {/* <AppCursive>{data.overview}</AppCursive> */}
              <AppText>
                Этот сериал подходит вам на <AppNikeFont>{fits}%</AppNikeFont>
              </AppText>

              <TouchableOpacity
                style={styles.leftBtn}
                onPress={() =>
                  addToAsyncStorage(
                    [data.id],
                    "watchLaterSerial",
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
                    "alreadyLookedSerial",
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
