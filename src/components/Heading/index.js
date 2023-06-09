import React from "react"
import { StyleSheet, Text, View} from "react-native";




export default function Heading() {
    return (
    <View style={styles.heading}>
    <Text style={styles.title}> Meu Treino</Text>
    </View>
    );
}



const styles = StyleSheet.create({
heading: {
height: 120,
paddingTop:38,
backgroundColor:'#7CB7ED',
alignItems: 'center',
justifyContent:'center',
},

title: {
color: "#fff",
fontSize: 20,
fontWeight: 'bold',
},

});