import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={style.containers}>
      <Text style={style.text}>Home</Text>
      <Text style={style.text}>Products</Text>
      <Text style={style.text}>Projects</Text>
      <Text style={style.text}>Blogs</Text>
      <Text style={style.text}>About</Text>
      <StatusBar style="auto"></StatusBar>
    </View>
  );
}

const style = StyleSheet.create({
  containers: {
    display:"flex",
    gap:"",
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "black",
    marginBottom:5,
    paddingVertical:"15px"

  },
  text: {
    color: "white",
    font: "bold",
    fontSize:18,
    fontWeight:600,
    fontFamily:"robot"
  },
});
