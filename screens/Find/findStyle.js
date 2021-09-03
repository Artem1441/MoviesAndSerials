import { StyleSheet } from "react-native";
import { THEME } from "../../components/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  inputBlock: {
    flexDirection: "row",
    width: "100%",
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    position: "relative",
    marginBottom: 20,
  },
  inputSearch: {
    backgroundColor: "white",
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    padding: 10,
    flex: 1,
    height: "100%",
    borderColor: "#D3D3D3",
    borderWidth: 1,
  },

  inputBtn: {
    height: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#1E90FF",
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderColor: "#D3D3D3",
    borderWidth: 1,
    borderLeftWidth: 0,
  },
  blocksText: {
    fontSize: 24,
  },
});
