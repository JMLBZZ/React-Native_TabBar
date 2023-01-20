import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ImageBackground, Dimensions, Image, ScrollView} from "react-native";
import { StatusBar } from 'expo-status-bar';


import PageTitle from "../components/PageTitle";


const catDatas = [
    { 
        "titre": "Moteur à aimant permanent", 
        "image": require("../../assets/images/EV-permanent.gif"),
        "description": "IC'est le moteur le plus répandu dans la production automobile et on peut même dire qu'il a le monopole ! Le rotor (centre du moteur, l'élément qui tourne) est ici composé d'un aiment permanent, à savoir un métal ferreux qui a été fondu en faisant en sorte que le spin des atomes soient tous dans le même sens. On le fait donc refroidir avec ces atomes organisés de la sorte, à savoir tous les atomes qui pointent le + et le - dans la même direction. Le souci est que cela nécessite des terres rares, un sujet assez délicat en ce moment.",
        imgWidth:3758,
        imgHeight:2076,
    },
    { "titre": "Moteur à induction", 
        "image": require("../../assets/images/EV-async.gif"),
        "description": "Le moteur à induction est finalement très proche du moteur à aimant permanent. En effet, au lieu d'intégrer un aimant dans le rotor, on y met à la place un électro-aimant. Ici pas besoin d'alimenter le rotor en électricité pour que l'électro-aimant du rotor voit des pôles apparaître, c'est beaucoup plus simple et pratique dans les faits. Quand j'envoie du courant dans le stator, il va devenir un électro-aimant (qui tourne grâce au jeu des courants alternatifs introduits) qui, à son tour, va induire de l'électricité dans le rotor (cage d'écureuil) . Le rotor va donc lui aussi devenir un aimant grâce au courant qui le traverse ... Au final, les rotor et stator sont des aimants qui interagissent entre eux, ce qui permet de mouvoir le moteur.",
    imgWidth:275,
    imgHeight:183,
},
]

//On récupère la largeur de l'écran dans la valeur de la constante "width" (qui sera appliqué dans les styles)
const width = Dimensions.get("window").width;


export default function CatScreen({navigation}){
    return (
        <SafeAreaView style={styles.container}>
            <PageTitle title="Les moteurs électriques" color="black" style={{flex:1}}/>
            <View style={{flex:14}}>
                <ScrollView>
                    {
                        catDatas.map((catData, index)=>

                            <TouchableOpacity key={index} style={styles.card} onPress={()=>navigation.navigate("CatDetail", {data:catData})}>
                                <Image source={catData.image} style={[styles.image, {height:(width-50)*catData.imgHeight/catData.imgWidth}]}/>
                                <Text style={styles.cardTitle}>{catData.titre}</Text>
                            </TouchableOpacity>,
                        )
                    }
                </ScrollView>
            </View>
            <StatusBar backgroundColor="rgba(0,0,0,0)" translucent={true} style="dark"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#E2E5E7",
    },
    card:{
        backgroundColor: "#F2F2F2",
        width:width -20,
        marginBottom:20,
        padding:15,
        borderRadius:10,
        alignItems: 'center',
        
    },
    image:{
        width:width-50,
        borderRadius:5,
    },
    cardText:{
        fontSize:30,
        justifyContent:"center",
        color:"black"
    },
    cardTitle:{
        fontFamily:"openSansItalic",
        fontSize:15,
        color:"black",
        height:50,
        justifyContent:"center",
        paddingTop:5,
    },
})