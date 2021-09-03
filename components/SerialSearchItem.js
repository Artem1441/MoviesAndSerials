import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { searchItemStyle } from "./globalStyle/searchItemStyle";
import { AppText } from "./ui/AppText";
import { serilasLogic } from "./../algoritms/serilalsLogic";
import { genres } from "./../defaultData/genres";

export const SerialSearchItem = ({ item, genreSerial, navigation }) => {
  let fits = serilasLogic(item, genreSerial);

  const openSerialReview = (id, fits) => {
    navigation.navigate("SerialReviewScreen", {
      id,
      fits,
    });
  };

  return (
    <TouchableOpacity onPress={() => openSerialReview(item.id, fits)}>
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
        <AppText>{item.name}</AppText>
        {item.genre_ids.map((item) => (
          <AppText key={item}>{genres[item]}</AppText>
        ))}
        {fits !== false && <AppText>{fits}%</AppText>}
      </View>
    </TouchableOpacity>
  );
};
