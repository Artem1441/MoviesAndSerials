import { Dimensions } from "react-native";

export const THEME = {
  YELLOW_COLOR: "#ffdd2d",
  OPACITY_BLACK_COLOR: "rgba(0,0,0,0.5)",
  BLACK_COLOR: "rgb(0,0,0)",
  HEADER_BACKGROUND_COLOR: "#ffdd2d",
  DARK_THEME_COLOR: "#19191a",
  TEXT_COLOR: "black",
  BTN_COLOR: "#FF8C00",
  GRADIENT_COLORS: ["#FFD700", "#FFA500", "#FF8C00"],
  FIND_IMAGE_WIDTH: (Dimensions.get("screen").width - 10) / 2 - 40,
  FIND_IMAGE_HEIGHT: ((Dimensions.get("screen").width - 10) / 2 - 40) * 1.5,
  FIND_BLOCK_CONTAINER_WIDTH: (Dimensions.get("screen").width - 20) / 2.2,
};
