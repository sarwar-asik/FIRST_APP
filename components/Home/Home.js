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
      <Image
        style={styles.logo}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBg_nxqjbgYXkaRe5lc3YtdOhkGgzKvqz5ekWBukSa6C0ArWakr-Qi2-oaxNwo5F0adL4&usqp=CAU",
        }}
      />
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
