import React, { useState } from "react";
import { StyleSheet, Text, View} from 'react-native';



export default function Home() {
  
  return (
    <View style={styles.container}>
        <Text>Home!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
