import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

export const LogoBtn = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={{
            uri: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/book-256.png",
          }}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
  },
});
