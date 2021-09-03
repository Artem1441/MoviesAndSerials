import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { AppText } from "../../components/ui/AppText";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./serialsStyle";

import { CheckboxContainer } from "../../components/CheckboxContainer";

export const SerialsScreen = ({ navigation }) => {
  const [action, setAction] = useState(false);
  const [war, setWar] = useState(false);
  const [detectives, setDetectives] = useState(false);
  const [drama, setDrama] = useState(false);
  const [kids, setKids] = useState(false);
  const [comedy, setComedy] = useState(false);
  const [other, setOther] = useState(false);
  const [nothing, setNothing] = useState(false);

  const nextScreen = async () => {
    navigation.navigate("HomeScreen");
    try {
      let genres = [];
      if (action || detectives || war || drama || comedy || kids || other) {
        action && genres.push(10759);
        war && genres.push(10768);
        detectives && genres.push(9648);
        drama && genres.push(18);
        kids && genres.push(10762);
        comedy && genres.push(35);
        other &&
          genres.push(16, 80, 99, 10751, 10763, 10764, 10765, 10766, 10767, 37);
        await AsyncStorage.setItem("serialsGenre", JSON.stringify(genres));
      } else {
        AsyncStorage.setItem("serialsGenre", "false");
      }
      AsyncStorage.setItem("homeScreen", true);
    } catch (e) {
      alert(e);
    }
  };

  const backScreen = () => {
    navigation.navigate("MoviesScreen");
  };

  const choiceFunc = (setType, type) => {
    setType(!type);
    setNothing(false);
  };

  const nothingFunc = () => {
    setAction(false);
    setDetectives(false);
    setWar(false);
    setDrama(false);
    setComedy(false);
    setKids(false);
    setOther(false);
    setNothing(!nothing);
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.text}>Выберите нравящиеся жанры сериалов:</AppText>
      <View style={styles.checkboxContainer}>
        <CheckboxContainer
          type={action}
          setType={() => choiceFunc(setAction, action)}
          name="Боевик и Приключения"
        />
        <CheckboxContainer
          type={detectives}
          setType={() => choiceFunc(setDetectives, detectives)}
          name="Детективы"
        />
        <CheckboxContainer
          type={war}
          setType={() => choiceFunc(setWar, war)}
          name="Война и Политика"
        />
        <CheckboxContainer
          type={drama}
          setType={() => choiceFunc(setDrama, drama)}
          name="Драма"
        />
        <CheckboxContainer
          type={kids}
          setType={() => choiceFunc(setKids, kids)}
          name="Детское"
        />
        <CheckboxContainer
          type={comedy}
          setType={() => choiceFunc(setComedy, comedy)}
          name="Комедия"
        />
        <CheckboxContainer
          type={other}
          setType={() => choiceFunc(setOther, other)}
          name="Другое"
        />
        <CheckboxContainer
          type={nothing}
          setType={nothingFunc}
          name="Не смотрю cериалы"
        />
      </View>
      <TouchableOpacity onPress={nextScreen} style={styles.buttonNext}>
        <AntDesign name="right" size={40} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={backScreen} style={styles.buttonBack}>
        <AntDesign name="left" size={40} color="black" />
      </TouchableOpacity>
    </View>
  );
};
