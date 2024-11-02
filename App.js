import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Appbar from './src/screen/Appbar';

export default function App() {
  
  const [inScreen, setInScreen] = useState(["TASK" | "COMPLETE TASK"]);
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>LISTA</Text>
      <Appbar inScreen={inScreen} setInScreen={setInScreen}></Appbar>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 50,
  },
  titulo: {
    fontSize: 30,    
  }
});
