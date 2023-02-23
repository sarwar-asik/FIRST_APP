import React from "react";

import { View, Text, Image, StatusBar, StyleSheet } from "react-native";
import AppOne from "../../AppOne";
export default function Home() {
  return (
    <View>
      <Text>Welcome in Home page</Text>

      <Image
        style={styles.logo}
        source={require("../../assets/appimagepool.webp")}
      />
      <AppOne />

      <StatusBar style="auto"></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 500,
    width: 400,
  },
});
