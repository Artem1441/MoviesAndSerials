import { THEME } from "../theme";

export const searchItemStyle = {
  container: {
    width: THEME.FIND_BLOCK_CONTAINER_WIDTH,
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    height: THEME.FIND_IMAGE_HEIGHT,
    width: THEME.FIND_IMAGE_WIDTH,
  },
  notFound: {
    height: THEME.FIND_IMAGE_HEIGHT,
    width: THEME.FIND_IMAGE_WIDTH,
    backgroundColor: "#DCDCDC",
    justifyContent: "center",
    alignContent: "center",
  },
  notFoundText: {
    textAlign: "center",
  },
};
