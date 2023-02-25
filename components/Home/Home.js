import React from "react";
import { View, Text, Image, Button, StatusBar, StyleSheet } from "react-native";
import AppOne from "../../AppOne";
export default function Home() {



  
  return (
    <View style={styles.mainContainer}>
      <View style={styles.card}>
        <Image
          style={styles.logo}
          source={{uri:"https://img.freepik.com/free-photo/coding-man_1098-18084.jpg?w=1060&t=st=1677345748~exp=1677346348~hmac=02f67a0aeb1f83b8896d69251f4139983464b6108af1f97e212aa214944bd607"}}
        />
        <View style={styles.cardBody}>
        <Text style={styles.text1}>React Native Developer</Text>
        <Text style={styles.text2}>
          This is a card made by me for practise react native app development. I used raw  native css for create this card .
        </Text>
        <Button
        title="See Details"
        style={styles.btn1}
        onPress={() => Alert.alert('Simple Button pressed')}
      />
        </View>
      </View>

      {/* 

      <AppOne />
      <Image
        style={styles.logo}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBg_nxqjbgYXkaRe5lc3YtdOhkGgzKvqz5ekWBukSa6C0ArWakr-Qi2-oaxNwo5F0adL4&usqp=CAU",
        }}
      />
      <StatusBar style="auto"></StatusBar> */}
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "slate",
    marginHorizontal: "20px",
  },
  card:{
    backgroundColor:"#06b6d4",
    padding:5,
  },
  cardBody:{
    paddingHorizontal:"30px",
    
    marginVertical:"10px",
  },
  text1:{
    fontSize:36,
    fontWeight:700,
    color:"white",
    fontFamily:"serif"
    
    // marginVertical:8
  },
  text2:{
    color:"white",
    fontWeight:400
  },
  logo: {
    height: "400px",
    width:'90%',
    borderRadius:"10px",
    margin:"auto"
  },
  btn1: {
    marginTop:70,
  }
});
