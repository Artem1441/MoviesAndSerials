import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { AppText } from "../../components/ui/AppText";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./moviesStyle";

import { CheckboxContainer } from "../../components/CheckboxContainer";

export const MoviesScreen = ({ navigation }) => {
  const [action, setAction] = useState(false);
  const [fantastic, setFantastic] = useState(false);
  const [war, setWar] = useState(false);
  const [detectives, setDetectives] = useState(false);
  const [family, setFamily] = useState(false);
  const [horror, setHorror] = useState(false);
  const [kids, setKids] = useState(false);
  const [documental, setDocumental] = useState(false);
  const [drama, setDrama] = useState(false);
  const [melodrama, setMelodrama] = useState(false);
  const [comedy, setComedy] = useState(false);
  const [mistic, setMistic] = useState(false);
  const [other, setOther] = useState(false);
  const [nothing, setNothing] = useState(false);

  const nextScreen = async () => {
    navigation.navigate("SerialsScreen");
    try {
      let genres = [];
      if (
        action ||
        fantastic ||
        detectives ||
        war ||
        horror ||
        family ||
        kids ||
        documental ||
        drama ||
        melodrama ||
        comedy ||
        mistic ||
        other
      ) {
        action && genres.push(28);
        fantastic && genres.push(878);
        detectives && genres.push(9648);
        war && genres.push(10752);
        horror && genres.push(27);
        family && genres.push(10751);
        kids && genres.push(16);
        documental && genres.push(99);
        drama && genres.push(18);
        melodrama && genres.push(10749);
        comedy && genres.push(35);
        mistic && genres.push(53);
        other && genres.push(12, 14, 36, 37, 80, 10402, 10765);
        await AsyncStorage.setItem("moviesGenre", JSON.stringify(genres));
      } else {
        AsyncStorage.setItem("moviesGenre", "false");
      }
    } catch (e) {
      alert(e);
    }
  };

  const backScreen = () => {
    navigation.navigate("PriorityScreen");
  };

  const choiceFunc = (setType, type) => {
    setType(!type);
    setNothing(false);
  };

  const nothingFunc = () => {
    setAction(false);
    setFantastic(false);
    setDetectives(false);
    setWar(false);
    setFamily(false);
    setHorror(false);
    setKids(false);
    setDocumental(false);
    setDrama(false);
    setComedy(false);
    setMistic(false);
    setMelodrama(false);
    setOther(false);
    setNothing(!nothing);
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.text}>???????????????? ???????????????????? ?????????? ??????????????:</AppText>
      <View style={styles.checkboxContainer}>
        <CheckboxContainer
          type={action}
          setType={() => choiceFunc(setAction, action)}
          name="????????????"
        />
        <CheckboxContainer
          type={fantastic}
          setType={() => choiceFunc(setFantastic, fantastic)}
          name="????????????????????"
        />
        <CheckboxContainer
          type={detectives}
          setType={() => choiceFunc(setDetectives, detectives)}
          name="??????????????????"
        />
        <CheckboxContainer
          type={war}
          setType={() => choiceFunc(setWar, war)}
          name="??????????????"
        />
        <CheckboxContainer
          type={horror}
          setType={() => choiceFunc(setHorror, horror)}
          name="??????????"
        />
        <CheckboxContainer
          type={family}
          setType={() => choiceFunc(setFamily, family)}
          name="????????????????"
        />
        <CheckboxContainer
          type={kids}
          setType={() => choiceFunc(setKids, kids)}
          name="??????????????????????"
        />
        <CheckboxContainer
          type={documental}
          setType={() => choiceFunc(setDocumental, documental)}
          name="????????????????????????????"
        />
        <CheckboxContainer
          type={drama}
          setType={() => choiceFunc(setDrama, drama)}
          name="??????????"
        />
        <CheckboxContainer
          type={melodrama}
          setType={() => choiceFunc(setMelodrama, melodrama)}
          name="??????????????????"
        />
        <CheckboxContainer
          type={comedy}
          setType={() => choiceFunc(setComedy, comedy)}
          name="??????????????"
        />
        <CheckboxContainer
          type={mistic}
          setType={() => choiceFunc(setMistic, mistic)}
          name="??????????????/??????????????"
        />
        <CheckboxContainer
          type={other}
          setType={() => choiceFunc(setOther, other)}
          name="????????????"
        />
        <CheckboxContainer
          type={nothing}
          setType={nothingFunc}
          name="???? ???????????? ????????????"
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
