import React, { useState } from "react";
import { View, FlatList, Dimensions } from "react-native";
import { styles } from "./tikTokSliderStyle";
import { SingleItemSerial } from "./../../components/SingleItemSerial";
import { AppText } from "../../components/ui/AppText";
import { EndOfTheList } from "./../../components/EndOfTheList";

export const TikTokSliderSerialsScreen = ({ navigation, route }) => {
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
          <SingleItemSerial
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
