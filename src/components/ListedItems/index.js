import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function ListedItems({props, role}) {
    return(
        <TouchableOpacity onPress={() => role(props.id)}>
            <View style={styles.post}>
                <Text style={styles.textItem}>{props.text}</Text>
                <MaterialIcons name='delete' size={18} color={'gray'} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    post: {
        padding: 30,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent:'space-between'
    }, 

    textItem: {
        marginLeft: 30,
    }
});