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
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    padding: "9px",
    marginBottom:5
  },
  text: {
    flex:1,
    color: "white",
    font: "bold",
  },
});
