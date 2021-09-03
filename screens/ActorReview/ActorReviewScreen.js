import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { styles } from "./actorReviewStyle";
import ImageZoom from "react-native-image-pan-zoom";
import { moviesGenre } from "./../../defaultData/asyncStorage";
import { THEME } from "./../../components/theme";

import { AppText } from "../../components/ui/AppText";
import { LinearGradient } from "expo-linear-gradient";
import { AppTextBold } from "./../../components/ui/AppTextBold";
import { MovieSearchItem } from "../../components/MovieSearchItem";
import { SerialSearchItem } from "./../../components/SerialSearchItem";

export const ActorReviewScreen = ({ navigation, route }) => {
  const [movies, setMovies] = useState([]);
  const [serials, setSerials] = useState([]);
  const [data, setData] = useState([]);
  const [genreMovie, setGenreMovie] = useState();
  moviesGenre().then((res) => setGenreMovie(res));

  useEffect(() => {
    getData(route.params.id);
    getMovies(route.params.id);
    getSerials(route.params.id);
  }, [route.params]);

  const getData = (id) => {
    const url = `https://api.themoviedb.org/3/person/${id}?api_key=1cf50e6248dc270629e802686245c2c8&language=ru`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  };

  const getMovies = (id) => {
    const url = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=1cf50e6248dc270629e802686245c2c8&language=ru`;
    let allMovies = [];

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.cast.map((item) => allMovies.push(item));
        setMovies(sortByPopularity(allMovies));
      });
  };

  const getSerials = (id) => {
    const url = `https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=1cf50e6248dc270629e802686245c2c8&language=ru`;
    let allSerials = [];

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.cast.map((item) => allSerials.push(item));
        setSerials(sortByPopularity(allSerials));
      });
  };

  const sortByPopularity = (arr) => {
    arr.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (a.popularity > b.popularity) {
        return -1;
      }
    });

    return arr;
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
                uri: `https://image.tmdb.org/t/p/w500${data.profile_path}`,
              }}
              style={styles.image}
            />
          </ImageZoom>

          <AppTextBold style={styles.name}>{data.name}</AppTextBold>
          <AppText style={styles.birthday}>
            Дата рождения: {data.birthday}
          </AppText>
          <AppText style={styles.place_of_birth}>
            Место рождения: {data.place_of_birth}
          </AppText>
          <AppText style={styles.biography}>{data.biography}</AppText>
          <AppTextBold style={styles.blocksText}>Фильмы</AppTextBold>
        </View>

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={movies}
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

        <View style={styles.container}>
          <AppTextBold style={styles.blocksTextBottom}>Сериалы</AppTextBold>
        </View>

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={serials}
          renderItem={({ item }) => {
            return <SerialSearchItem item={item} navigation={navigation} />;
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
    </LinearGradient>
  );
};
