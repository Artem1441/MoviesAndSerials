import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { AppText } from "./ui/AppText";
import { searchItemStyle } from "./globalStyle/searchItemStyle";
import { moviesLogic } from "./../algoritms/moviesLogic";
import { genres } from "./../defaultData/genres";

export const MovieSearchItem = ({ item, genreMovie, navigation }) => {
  let fits = moviesLogic(item, genreMovie);

  const openMovieReview = (id, fits) => {
    navigation.navigate("MovieReviewScreen", {
      id,
      fits,
    });
  };

  return (
    <TouchableOpacity onPress={() => openMovieReview(item.id, fits)}>
      <View style={searchItemStyle.container}>
        {item.poster_path === null ? (
          <View style={searchItemStyle.notFound}>
            <AppText style={searchItemStyle.notFoundText}>
              Изображение отсутствует
            </AppText>
          </View>
        ) : (
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            }}
            style={searchItemStyle.image}
          />
        )}
        <AppText>{item.title}</AppText>
        {item.genre_ids.map((item) => (
          <AppText key={item}>{genres[item]}</AppText>
        ))}
        {fits !== false && <AppText>{fits}%</AppText>}
      </View>
    </TouchableOpacity>
  );
};
