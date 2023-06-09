import { FlatList, StyleSheet, Text, View, useEffect } from 'react-native';
import React, { useState } from 'react';
import { Axios } from 'axios'; 
  
  import Heading from '../../../components/Heading';
  import ListedItems from '../../../components/ListedItems';
  import AddItems from '../../../components/AddItems';

export default function Quadriceps(){
  const [list, setList] = useState();

    //Delete
    const deleteItem = (key) => {
      Axios.delete(`http://10.0.0.60:3001/item/${key}`,
      )
    }

    //Read
    useEffect(() => {
      Axios.get("http://10.0.0.60:3001/item").then(
        (response) => {
          setList(response.data)
        }
      )
     },[list])
  
    
    //CREATE
    const submitInformation = (texto) => {
      Axios.post( "http://10.0.0.60:3001/item", {item: texto} )
    }
  
    return (
  
      <View style={styles.container}>
        
        <Heading />
  
        <View style={styles.content}>
  
          <AddItems role={submitInformation} />
  
          <View style={styles.styleList}>
            <FlatList
              data={list}
              renderItem={({ item }) => (
                <ListedItems props={item} role={deleteItem} />
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
  