import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDataStore } from '../../services/stores/DataStore';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

export default function NewItems({props, role, item}) {
    const { setSelectedData } = useDataStore()
    const navigation = useNavigation()
    
    const onSelectItem = () => {
        setSelectedData(item)
        if (props.key == '1') {
             navigation.navigate('ChestShoulder')
        } else if (props.key == '2'){ 
            navigation.navigate('Quadriceps')
        }else if (props.key == '3'){ 
            navigation.navigate('BicepsTriceps')
        }else if (props.key == '4'){ 
            navigation.navigate('HamstringButtocks')
        }else if (props.key == '5'){ 
            navigation.navigate('BackTrapeze')
        }
       
    }
    return(
        <TouchableOpacity onPress={() => onSelectItem()}>
            <View style={styles.post}>
                <Text style={styles.textItem} >{props.text}</Text> 
                <Ionicons name="arrow-forward-circle" size={24} color="black" />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    post: {
        padding: 30,
        marginTop: 16,
        backgroundColor: "#fff",
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent:'space-between'
    }, 

    
});