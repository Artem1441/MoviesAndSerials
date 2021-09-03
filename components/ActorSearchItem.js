import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { AppText } from "./ui/AppText";
import { searchItemStyle } from "./globalStyle/searchItemStyle";

export const ActorSearchItem = ({ item, navigation, role = false }) => {
  // console.log(item);

  const openActorReview = (id) => {
    navigation.navigate("ActorReviewScreen", { id });
  };

  return (
    <TouchableOpacity onPress={() => openActorReview(item.id)}>
      <View style={searchItemStyle.container}>
        {item.profile_path === null ? (
          <View style={searchItemStyle.notFound}>
            <AppText style={searchItemStyle.notFoundText}>
              Изображение отсутствует
            </AppText>
          </View>
        ) : (
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.profile_path}`,
            }}
            style={searchItemStyle.image}
          />
        )}
        <AppText>{item.name}</AppText>
        {role && <AppText>{item.character}</AppText>}
      </View>
    </TouchableOpacity>
  );
};
