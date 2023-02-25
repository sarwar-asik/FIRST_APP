import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

export default function App() {
  return (
    <View>
      <Header></Header>
      <TouchableHighlight style={styles.container}>
        <Home></Home>
      </TouchableHighlight>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
