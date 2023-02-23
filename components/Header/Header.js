import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={style.containers}>
      <Text style={style.text}>Headers</Text>
      <Text style={style.text}>Headers</Text>
      <Text style={style.text}>Headers</Text>
      <Text style={style.text}>Headers</Text>
      <Text style={style.text}>Headers</Text>
    </View>
  );
}

const style = StyleSheet.create({
  containers: {
    display: "flex",
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
