import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { styles } from "./serialReviewStyle";
import { THEME } from "./../../components/theme";
import ImageZoom from "react-native-image-pan-zoom";

import { AppText } from "../../components/ui/AppText";
import { LinearGradient } from "expo-linear-gradient";
import { AppTextBold } from "./../../components/ui/AppTextBold";
import { ActorSearchItem } from "./../../components/ActorSearchItem";
import { AppNikeFont } from "./../../components/ui/AppNikeFont";
import { addToAsyncStorage } from "./../../algoritms/addToAsyncStorage";
import { getInfoFromAsyncStorage } from "./../../algoritms/getInfoFromAsyncStorage";

export const SerialReviewScreen = ({ navigation, route }) => {
  const [actors, setActors] = useState([]);
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    getData(route.params.id);
    getActors(route.params.id);
    getInfoFromAsyncStorage("serial", route.params.id, setVisible);
  }, [route.params]);

  const getData = (id) => {
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=1cf50e6248dc270629e802686245c2c8&language=ru`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  };

  const getActors = (id) => {
    const url = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=1cf50e6248dc270629e802686245c2c8&language=ru`;
    let allActors = [];

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.cast.map((item) => allActors.push(item));
        setActors(allActors);
      });
  };
  return (
    <LinearGradient colors={THEME.GRADIENT_COLORS} style={styles.mainContainer}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <ImageZoom
            cropWidth={Dimensions.get("screen").width - 80}
            cropHeight={(Dimensions.get("screen").width - 80) * 1.5}
            imageWidth={Dimensions.get("screen").width - 80}
            imageHeight={(Dimensions.get("screen").width - 80) * 1.5}
          >
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
              }}
              style={styles.image}
            />
          </ImageZoom>

          <AppTextBold style={styles.name}>{data.name}</AppTextBold>
          <AppText style={styles.vote_average}>
            Рейтинг: {data.vote_average}
          </AppText>
          <AppText style={styles.first_air_date}>
            Дата первого выхода: {data.first_air_date}
          </AppText>
          <AppText style={styles.runtime}>
            Длительность серии:{" "}
            {data.episode_run_time && data.episode_run_time[0]} мин
          </AppText>
          <AppText style={styles.runtime}>
            Количество сезонов: {data.number_of_seasons}
          </AppText>
          <AppText style={styles.runtime}>
            Количество эпизодов: {data.number_of_episodes}
          </AppText>
          <View style={styles.genresContainer}>
            <AppText style={styles.genresText}>
              Жанры:
              {data.genres &&
                data.genres.map((item, index) => {
                  return (
                    " " +
                    item.name.toLowerCase() +
                    (index + 1 !== data.genres.length ? "," : "")
                  );
                })}
            </AppText>
          </View>
          <AppText style={styles.fits}>
            Сериал вам подходит на{" "}
            <AppNikeFont>{route.params.fits}%</AppNikeFont>
          </AppText>
          <AppText style={styles.overview}>{data.overview}</AppText>
          <AppTextBold style={styles.blocksText}>Актёры</AppTextBold>
        </View>

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={actors}
          renderItem={({ item }) => {
            return (
              <ActorSearchItem
                item={item}
                navigation={navigation}
                role={true}
              />
            );
          }}
          keyExtractor={(item) => item.id.toString()}
        />

        {visible && (
          <View style={styles.btnsBlock}>
            <TouchableOpacity
              style={styles.leftBtn}
              onPress={() =>
                addToAsyncStorage(
                  [data.id],
                  "watchLaterMovie",
                  setVisible,
                  route.params.setVisible ? route.params.setVisible : false,
                  navigation,
                  data,
                  true
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
                  route.params.setVisible ? route.params.setVisible : false,
                  navigation,
                  data,
                  true
                )
              }
            >
              <AppText style={styles.btnText}>Уже смотрел</AppText>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
};
