import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import Heading from '../../components/Heading';
import NewItems from '../../components/NewItems';


export default function Exercises() {

  const [list, setList] = useState([
    { title: 'A,', text: "Peito/Ombro", key: '1'},
    { title: 'B,', text: "Quadríceps", key: '2'},
    { title: 'C,', text: "Bíceps/tríceps", key: '3'},
    { title: 'D,', text: "Posterior/Glúteos", key: '4'},
    { title: 'E,', text: "Costas/Trapézio", key: '5'},
  ]);

  const touchableItem = (Key) => {
    setList(
      (prevList) => {
        return prevList.filter(text => text.key != Key);
      }
    )
  }



  return (

    <View style={styles.container}>
      
      <Heading />
    
      <View style={styles.content}>
        <View>
          <FlatList
            data={list}
            renderItem={({ item }) => (
              <NewItems props={item} role={touchableItem} />
            )}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
  },
  content: {
    padding: 40,
  }

});