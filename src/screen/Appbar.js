import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function ({ inScreen, setInScreen }) {
  const menu = ["TASKS", "COMPLETE TASKS"];

  function select(index) {
    setInScreen(index);
    console.log(menu[inScreen]);
  }

  return (
    <View style={styles.container}>
      {menu.map((item, index) => {
        return(<TouchableOpacity key={index} onPress={() => {select(item)}} style={styles.button}>
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>);
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    padding: 10,
  },
  button: {
    borderWidth: 3,
    borderRadius: 20,
    padding: 10,
    width: 150,
    height: 50,
    justifyContent: "center",
    flexDirection: "row",
    margin: 5,
  },
  text: {
    textAlign: "center",
  }
});