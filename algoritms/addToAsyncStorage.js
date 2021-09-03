import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const addToAsyncStorage = async (
  id,
  type,
  setVisible,
  setVisibleDeep = false,
  navigation,
  data,
  goBack = false
) => {
  let prevAlreadyLooked = await AsyncStorage.getItem(type);
  prevAlreadyLooked = [...JSON.parse(prevAlreadyLooked), ...id];

  if (type === "alreadyLookedMovie" || type === "alreadyLookedSerial") {
    Alert.alert(
      "Не хотите оценить фильм?",
      `Для этого нажмите "Да", тогда Вас перенесёт на экран отзыва`,
      [
        {
          text: "Нет",
          style: "cancel",
          onPress: () =>
            thenFunc(
              true,
              goBack,
              setVisible,
              setVisibleDeep,
              prevAlreadyLooked,
              type,
              navigation
            ),
        },
        {
          text: "Да",
          onPress: () => {
            navigation.navigate("AddScreen", { data });
            thenFunc(
              false,
              goBack,
              setVisible,
              setVisibleDeep,
              prevAlreadyLooked,
              type,
              navigation
            );
          },
        },
      ]
    );
  } else {
    thenFunc(
      true,
      goBack,
      setVisible,
      setVisibleDeep,
      prevAlreadyLooked,
      type,
      navigation
    );
  }
};

const thenFunc = (
  back1,
  back2,
  setVisible,
  setVisibleDeep,
  prevAlreadyLooked,
  type,
  navigation
) => {
  try {
    AsyncStorage.setItem(type, JSON.stringify(prevAlreadyLooked));
    setVisible(false);
    setVisibleDeep !== false && setVisibleDeep(false);
    if (back1 && back2) {
      navigation.goBack(true);
    }
  } catch (e) {
    console.log(e);
  }
};
