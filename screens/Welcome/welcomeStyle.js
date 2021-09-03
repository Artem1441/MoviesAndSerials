import { StyleSheet } from "react-native";
import { THEME } from "../../components/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.YELLOW_COLOR,
    padding: 20,
  },
  text: {
    fontSize: 32,
    textAlign: "center",
  },
  buttonNext: {
    position: "absolute",
    bottom: 50,
    right: 20,
  },
});
