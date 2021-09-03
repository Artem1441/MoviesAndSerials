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
  birthday: {
    fontSize: 18,
    textAlign: "left",
    width: "100%",
    paddingLeft: 20,
  },
  place_of_birth: {
    fontSize: 18,
    textAlign: "left",
    width: "100%",
    paddingLeft: 20,
  },
  biography: {
    padding: 20,
  },
  blocksText: {
    fontSize: 24,
    textAlign: "left",
    width: "100%",
    paddingLeft: 20,
    paddingTop: 30,
  },
  blocksTextBottom: {
    fontSize: 24,
    textAlign: "left",
    width: "100%",
    paddingLeft: 20,
  },
});
