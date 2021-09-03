import AsyncStorage from "@react-native-async-storage/async-storage";

export const moviesGenre = async () => {
  try {
    const allData = await AsyncStorage.getItem("moviesGenre");
    return allData;
  } catch (error) {
    console.error(error);
  }
};

export const serialsGenre = async () => {
  try {
    const allData = await AsyncStorage.getItem("serialsGenre");
    return allData;
  } catch (error) {
    console.error(error);
  }
};
