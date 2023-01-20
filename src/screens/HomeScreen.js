import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ImageBackground, Dimensions} from "react-native";
import { StatusBar } from 'expo-status-bar';//pour "supprimer" la status bar noire en haut de l'écran


// import des assets :
import background from "../../assets/images/bg-home.jpg";

//On récupère la largeur de l'écran dans la valeur de la constante "width" (qui sera appliqué dans les styles)
const {width,height} = Dimensions.get("window");

export default function HomeScreen({navigation}){
    return (
        <ImageBackground source={background} style={styles.background}>
            <SafeAreaView style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.titre}>Électrique ou Thermique?</Text>
                    <Text style={styles.sousTitre}>Les moteurs essences et diesels sont parmis les carburants les plus populaires. Mais les moteurs électrique prennent de plus en plus de place dans le marché de l'automobile.</Text>
                    <TouchableOpacity style={styles.toButton} onPress={()=>navigation.navigate("Details")}>
                        <Text style={styles.toText}>En savoir plus</Text>
                    </TouchableOpacity>
                </View>
            <StatusBar backgroundColor="rgba(0,0,0,0)" translucent={true} style="dark"/>
            </SafeAreaView>
        </ImageBackground>
    );
}

//mise en place des styles
const styles = StyleSheet.create({
    background:{
        flex: 1,
        width: width,//la largeur est égale à la largeur de l'écran (code plus propre car ça évite de mettre 100%)
        resizeMode:"cover",
    },
    textContainer: {
        marginTop:height -180,
        marginHorizontal:20,
    },
    titre:{
        fontSize:30,
        color:"white",
        fontFamily:"lily",
    },
    sousTitre:{
        fontSize:15,
        color:"white",
        fontFamily:"openSansRegular",
    },
    toButton:{
        backgroundColor:"white",
        fontFamily:"openSansRegular",
        paddingVertical:20,
        paddingHorizontal:10,
        marginTop:10,
        borderRadius:20,
        alignItems:"center",
    },
    toText: {
        fontFamily:"openSansRegular",
        fontSize:15,
    },
});



