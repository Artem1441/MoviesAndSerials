import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import { styles } from "./profileStyle";
import { headerStyle } from "./../../components/globalStyle/headerStyle";

import { LogoBtn } from "../../components/LogoBtn";
import { RecomendationsBtn } from "../../components/RecomendationsBtn";
import { FindBtn } from "../../components/FindBtn";
import { Menu } from "../../components/Menu";

export const ProfileScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
      headerStyle: headerStyle,
      headerTitle: () => <LogoBtn />,
      headerLeft: () => <RecomendationsBtn navigation={navigation} />,
      headerRight: () => <FindBtn navigation={navigation} />,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Menu navigation={navigation} active={"ProfileScreen"} />
    </View>
  );
};
