import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ImageBackground, Dimensions, ScrollView} from "react-native";
import { StatusBar } from 'expo-status-bar';

//import des assets :
import background from "../../assets/images/bg-home-detail.jpg";

//import des composants :
import PageTitle from "../components/PageTitle";

//On récupère la largeur de l'écran dans la valeur de la constante "width" (qui sera appliqué dans les styles)
const {width,height} = Dimensions.get("window");

export default function HomeDetailScreen({navigation}){
    return(
        <ImageBackground source={background} style={styles.background}>
            <SafeAreaView style={styles.container}>
                <PageTitle title="Électrique ou Thermique?" color="#fff" style={{flex:1,}}/>
                <View style={{flex:14,}}>
                    <ScrollView style={styles.textContainer}>
                        <Text style={styles.text}>
                            Que choisir entre un moteur électrique et un moteur thermique ? Tout le monde le sait, un moteur électrique est clairement différent en terme de sensation et de consommation par rapport à un moteur thermique. Si la question peut sembler dépassé, nous allons quand même faire le point.
                        </Text>
                        <Text style={styles.text}>
                            Souvent mise de côté et peu prise en considération, la comparaison du rendement entre voiture électrique et voiture thermique n'est pas aussi caricaturale qu'on pourrait le penser ... En effet, les choses sont généralement exposées de manières grossières et simplistes, avec d'un côté 90% pour le moteur électrique et 40% pour le moteur thermique.
                        </Text>
                        <Text style={styles.text}>
                            Si on s'arrête là, alors le moteur thermique paraît archaïque et dépassé (ce qui est en partie vrai ne nous mentons pas). Nous allons toutefois voir que ce niveau de comparaison est totalement faux et biaisé. Et pour mettre les choses sur un pied d'égalité, nous allons partir la comparaison depuis le baril de pétrole, ou plutôt juste après qu'il ait été raffiné (qu'on ait extrait l'essence et le fioul (= diesel).
                        </Text>
                    </ScrollView>
                </View>
            </SafeAreaView>
            <StatusBar backgroundColor="rgba(0,0,0,0)" translucent={true} style="dark"/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        width:width,
    },
    container:{
        flex:1,
    },
    textContainer:{
        backgroundColor:"rgba(255,255,255,0.6)",
        marginHorizontal :15,
        paddingTop:20,
    },
    text:{
        fontSize:15,
        fontFamily: "openSansRegular",
        marginBottom:10,
        paddingHorizontal:20,
    },
});



