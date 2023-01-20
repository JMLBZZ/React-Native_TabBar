import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ImageBackground, Dimensions} from "react-native";

import Constants from "expo-constants";

export default function PageTitle(props) {
    const{title, color} = props;
    return(
        <View style={styles.container}>
            <Text style={[styles.title,{color:props.color}]}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: Constants.statusBarHeight,
        flex:1,
        alignItems: 'center',
    },
    title: {
        fontFamily: "lily",
        fontSize: 30,
    },
});

