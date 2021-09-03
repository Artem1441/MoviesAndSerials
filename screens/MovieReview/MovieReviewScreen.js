import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Linking,
} from "react-native";
import ImageZoom from "react-native-image-pan-zoom";

import { AppText } from "../../components/ui/AppText";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./movieReviewStyle";
import { THEME } from "./../../components/theme";
import { AppTextBold } from "./../../components/ui/AppTextBold";
import { ActorSearchItem } from "./../../components/ActorSearchItem";
import { AppNikeFont } from "./../../components/ui/AppNikeFont";
import { addToAsyncStorage } from "./../../algoritms/addToAsyncStorage";
import { getInfoFromAsyncStorage } from "./../../algoritms/getInfoFromAsyncStorage";

export const MovieReviewScreen = ({ navigation, route }) => {
  const [actors, setActors] = useState([]);
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    getData(route.params.id);
    getActors(route.params.id);
    getInfoFromAsyncStorage("movie", route.params.id, setVisible);
  }, [route.params]);

  const handlePress = async () => {
    await Linking.openURL(data.homepage);
  };

  const getData = (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=1cf50e6248dc270629e802686245c2c8&language=ru`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  const getActors = (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/casts?api_key=1cf50e6248dc270629e802686245c2c8`;
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

          <AppTextBold style={styles.title}>{data.title}</AppTextBold>
          <AppText style={styles.vote_average}>
            Рейтинг: {data.vote_average}
          </AppText>
          <AppText style={styles.release_date}>
            Дата выхода: {data.release_date}
          </AppText>
          <AppText style={styles.runtime}>
            Длительность: {data.runtime ? Math.floor(data.runtime / 60) : "0"}:
            {data.runtime
              ? data.runtime % 60 > 9
                ? data.runtime % 60
                : "0" + (data.runtime % 60)
              : "00"}
          </AppText>
          <View style={styles.genresContainer}>
            <AppText style={styles.genresText}>
              Жанры:
              {data.genres &&
                data.genres.map((item, index) => {
                  return (
                    " " +
                    item.name +
                    (index + 1 !== data.genres.length ? "," : "")
                  );
                })}
            </AppText>
          </View>
          {data.homepage && (
            <TouchableOpacity onPress={handlePress} style={{ width: "100%" }}>
              <AppText style={styles.link}>Перейти на оф сайт</AppText>
            </TouchableOpacity>
          )}
          <AppText style={styles.fits}>
            Фильм вам подходит на{" "}
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
