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
  title: {
    fontSize: 24,
    textAlign: "center",
    position: "absolute",
    top: 40,
  },
  buttonsContainer: {},
  button: {
    backgroundColor: THEME.BTN_COLOR,
    width: 160,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 20,
  },
});
