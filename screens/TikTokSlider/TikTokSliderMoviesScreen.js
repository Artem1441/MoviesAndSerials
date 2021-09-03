import React, { useState } from "react";
import { View, FlatList, Dimensions, Text } from "react-native";
import { styles } from "./tikTokSliderStyle";
import { SingleItemMovie } from "../../components/SingleItemMovie";
import { AppText } from "../../components/ui/AppText";
import { EndOfTheList } from "./../../components/EndOfTheList";

export const TikTokSliderMoviesScreen = ({ navigation, route }) => {
  // console.log(route.params.allData);
  return (
    <View style={styles.container}>
      <FlatList
        snapToAlignment={"start"}
        //как проходит выравнивание
        decelerationRate={"fast"}
        //скорость прокрутки
        snapToInterval={Dimensions.get("screen").height}
        // на сколько будет прокручиваться flatlist *здесь как в тиктоке
        showsVerticalScrollIndicator={false}
        // скрытие боковой панели скролла
        data={route.params.allData}
        renderItem={({ item }) => (
          <SingleItemMovie
            item={item}
            navigation={navigation}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={() => <EndOfTheList navigation={navigation} />}
      />
    </View>
  );
};
