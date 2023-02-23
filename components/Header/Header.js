import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={style.containers}>
      <Text style={style.text}>Home</Text>
      <Text style={style.text}>Products</Text>
      <Text style={style.text}></Text>
      <Text style={style.text}>Headers</Text>
      <Text style={style.text}>Headers</Text>
      <StatusBar style="auto"></StatusBar>
    </View>
  );
}

const style = StyleSheet.create({
  containers: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    marginTop: "20px",
    padding: "20px",
  },
  text: {
    color: "white",
    font: "bold",
  },
});
