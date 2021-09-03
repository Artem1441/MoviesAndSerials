import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { WelcomeScreen } from "./screens/Welcome/WelcomeScreen";
import { PriorityScreen } from "./screens/Priority/PriorityScreen";
import { MoviesScreen } from "./screens/Movies/MoviesScreen";
import { SerialsScreen } from "./screens/Serials/SerialsScreen";
import { HomeScreen } from "./screens/Home/HomeScreen";
import { SelectionScreen } from "./screens/Selection/SelectionScreen";
import { FindScreen } from "./screens/Find/FindScreen";
import { AddScreen } from "./screens/Add/AddScreen";
import { ProfileScreen } from "./screens/Profile/ProfileScreen";
import { TikTokSliderMoviesScreen } from "./screens/TikTokSlider/TikTokSliderMoviesScreen";
import { TikTokSliderSerialsScreen } from "./screens/TikTokSlider/TikTokSliderSerialsScreen";
import { MovieReviewScreen } from "./screens/MovieReview/MovieReviewScreen";
import { SerialReviewScreen } from "./screens/SerialReview/SerialReviewScreen";
import { ActorReviewScreen } from "./screens/ActorReview/ActorReviewScreen";

async function loadApplication() {
  await Font.loadAsync({
    "yanone-regular": require("./assets/fonts/YanoneReg.ttf"),
    "yanone-bold": require("./assets/fonts/YanoneBold.ttf"),
    "caveat-regular": require("./assets/fonts/Caveat-Regular.ttf"),
    "caveat-bold": require("./assets/fonts/Caveat-Bold.ttf"),
    "nike-font": require("./assets/fonts/NikeExtraBold.otf"),
  });
}

const Stack = createStackNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [initialRouteName, setInitialRouteName] = useState("WelcomeScreen");

  const changeScreen = async () => {
    try {
      const homeScreen = await AsyncStorage.getItem("homeScreen");
      if (homeScreen === "true") {
        setInitialRouteName("HomeScreen");
      }
    } catch (e) {
      alert(e);
    }
  };
  changeScreen();

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={(err) => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PriorityScreen"
          component={PriorityScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MoviesScreen"
          component={MoviesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SerialsScreen"
          component={SerialsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="SelectionScreen"
          component={SelectionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FindScreen"
          component={FindScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddScreen"
          component={AddScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen
          name="TikTokSliderMoviesScreen"
          component={TikTokSliderMoviesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TikTokSliderSerialsScreen"
          component={TikTokSliderSerialsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MovieReviewScreen"
          component={MovieReviewScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SerialReviewScreen"
          component={SerialReviewScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ActorReviewScreen"
          component={ActorReviewScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
