import AsyncStorage from "@react-native-async-storage/async-storage";

export const moviesClick = async (
  currentMovie,
  setCurrentMovie,
  navigation
) => {
  let localStorageNumber = Number(currentMovie) + 1;
  await fetchMovie(localStorageNumber);
  localStorageNumber++;
  await fetchMovie(localStorageNumber);
  localStorageNumber++;
  await fetchMovie(localStorageNumber);
  localStorageNumber++;
  await fetchMovie(localStorageNumber);
  localStorageNumber++;
  setCurrentMovie(localStorageNumber);
  try {
    AsyncStorage.setItem("moviesNumbers", String(localStorageNumber));
  } catch (e) {
    alert(e);
  }
  await fetchMovie(localStorageNumber, true, navigation);
};

export const serialsClick = async (
  currentSerial,
  setCurrentSerial,
  navigation
) => {
  let localStorageNumber = Number(currentSerial) + 1;
  await fetchSerial(localStorageNumber);
  localStorageNumber++;
  await fetchSerial(localStorageNumber);
  localStorageNumber++;
  await fetchSerial(localStorageNumber);
  localStorageNumber++;
  await fetchSerial(localStorageNumber);
  localStorageNumber++;
  setCurrentSerial(localStorageNumber);
  try {
    AsyncStorage.setItem("serialsNumbers", String(localStorageNumber));
  } catch (e) {
    alert(e);
  }
  await fetchSerial(localStorageNumber, true, navigation);
};

let allData = [];
const saveDataSerial = (data, openNext, navigation) => {
  allData = [...allData, ...data];
  openNext &&
    navigation.navigate("TikTokSliderSerialsScreen", {
      allData,
    });
  allData = [];
};

const saveDataMovie = (data, openNext, navigation) => {
  allData = [...allData, ...data];
  openNext &&
    navigation.navigate("TikTokSliderMoviesScreen", {
      allData,
    });
  allData = [];
};

const fetchSerial = async (number, openNext = false, navigation = false) => {
  await fetch(
    `https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8&language=ru&page=${number}`
  )
    .then((res) => res.json())
    .then((data) => {
      saveDataSerial(data.results, openNext, navigation);
    });
};

const fetchMovie = async (number, openNext = false, navigation = false) => {
  await fetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8&language=ru&page=${number}`
  )
    .then((res) => res.json())
    .then((data) => {
      saveDataMovie(data.results, openNext, navigation);
    });
};
