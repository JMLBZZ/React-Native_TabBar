import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ImageBackground, Dimensions, Image, ScrollView} from "react-native";
import { StatusBar } from 'expo-status-bar';


const width = Dimensions.get("window").width;

export default function DogDetail(props){
    const {route, navigation} = props;
    const datas = route.params.data;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.titre}>{datas.titre}</Text>
                <Image source={datas.image} style={[styles.image, {height:(width-50)*datas.imgHeight/datas.imgWidth}]}/>
                <Text style={styles.text}>{datas.description}</Text>
            </ScrollView>
            <StatusBar backgroundColor="rgba(0,0,0,0)" translucent={true} style="dark"/>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    image: {
        width:width-50,
        marginVertical:10,
        marginHorizontal:10,
    },
    titre:{
        backgroundColor:"black",
        fontFamily:"openSansRegular",
        fontSize:25,
        color:"white",
        textAlign:"center",
        paddingHorizontal:10,
    },
    text:{
        fontFamily:"openSansRegular",
        fontSize:15,
        paddingHorizontal:10,
        textAlign:"justify",
    }
});




