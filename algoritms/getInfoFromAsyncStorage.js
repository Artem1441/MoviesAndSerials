import AsyncStorage from "@react-native-async-storage/async-storage";

export const getInfoFromAsyncStorage = async (type, id, setVisible) => {
  if (type === "movie") {
    let alreadyLookedMovie = await AsyncStorage.getItem("alreadyLookedMovie");
    let watchLaterMovie = await AsyncStorage.getItem("watchLaterMovie");

    if (alreadyLookedMovie.includes(id) || watchLaterMovie.includes(id)) {
      setVisible(false);
    }
  } else if (type === "serial") {
    let alreadyLookedSerial = await AsyncStorage.getItem("alreadyLookedSerial");
    let watchLaterSerial = await AsyncStorage.getItem("watchLaterSerial");

    if (alreadyLookedSerial.includes(id) || watchLaterSerial.includes(id)) {
      setVisible(false);
    }
  }
};
