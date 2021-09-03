import { StyleSheet, Dimensions } from "react-native";
import { THEME } from "../../components/theme";

export const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  container: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    paddingTop: 40,
    paddingBottom: 0,
  },
  image: {
    height: (Dimensions.get("screen").width - 80) * 1.5,
    width: Dimensions.get("screen").width - 80,
  },
  name: {
    fontSize: 32,
    textAlign: "left",
    width: "100%",
    paddingLeft: 20,
    paddingTop: 20,
  },
  overview: {
    padding: 20,
  },
  vote_average: {
    fontSize: 18,
    textAlign: "left",
    width: "100%",
    paddingLeft: 20,
    paddingTop: 20,
  },
  genresContainer: {
    flexDirection: "row",
    width: "100%",
    paddingLeft: 20,
  },
  genresText: {
    textAlign: "left",
    width: "100%",
    fontSize: 18,
  },
  first_air_date: {
    fontSize: 18,
    textAlign: "left",
    width: "100%",
    paddingLeft: 20,
  },
  runtime: {
    fontSize: 18,
    textAlign: "left",
    width: "100%",
    paddingLeft: 20,
  },
  fits: {
    fontSize: 18,
    textAlign: "left",
    width: "100%",
    paddingLeft: 20,
    paddingTop: 10,
  },
  blocksText: {
    fontSize: 24,
    textAlign: "left",
    width: "100%",
    paddingLeft: 20,
    paddingTop: 30,
  },

  leftBtn: {
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 20,
    bottom: 60,
  },

  rigthBtn: {
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 20,
    bottom: 60,
  },
  btnsBlock: {
    height: 150,
    width: "100%",
  },
  btnText: {
    fontSize: 20,
  },
});
