import { StyleSheet } from "react-native";
import { THEME } from "../../components/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: THEME.YELLOW_COLOR,
    padding: 20,
    paddingTop: 40,
  },
  buttonNext: {
    position: "absolute",
    bottom: 50,
    right: 20,
  },
  buttonBack: {
    position: "absolute",
    bottom: 50,
    left: 20,
  },
  text: {
    fontSize: 28,
  },
  centerContent: {
    height: "90%",
    justifyContent: "center",
  },
});
