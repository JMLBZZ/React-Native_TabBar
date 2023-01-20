import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function CustomHeader(props){
    const { title, icon, titleColor} = props;
    return(
        <View style={[styles.container]}>
            <Image source={icon} style={styles.icon}/>
            <Text style={[styles.title, {color:titleColor}]}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "row",
        alignItems: "center",
    },
    icon:{
        width:50,
        height:50,
    },
    title:{
        fontFamily:"lily",
        fontSize:25,
        marginLeft:10,
    },
});
