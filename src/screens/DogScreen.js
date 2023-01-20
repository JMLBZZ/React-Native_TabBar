import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ImageBackground, Dimensions, Image, ScrollView} from "react-native";
import { StatusBar } from 'expo-status-bar';

import PageTitle from "../components/PageTitle";

const width = Dimensions.get("window").width;


const datas = [
    {
        id: 1,
        titre: "les moteurs Essence",
        image: require("../../assets/images/Turbo.jpg"),
        imgWidth: 1200,
        imgHeight:630,
        description: "C'est un sujet qui a pris le pas depuis l'arrivée massive des moteurs downsizés. C'était donc l'occasion de faire un article pour essayer d'éclaircir la chose, voyons donc l'ensemble les éléments qui distinguent les moteurs atmosphériques des moteurs turbo."        ,
        liste:[
            {
                id: 1,
                nom: "Turbo",
                image: require("../../assets/images/Turbo.jpg"),
                textes: [
                    {
                        id: 1,
                        texte: "Un turbocompresseur (dit « turbo », en langage courant) est l'un des trois principaux systèmes connus de suralimentation généralement employés sur les moteurs à combustion et explosion (essence ou diesel), destinés à augmenter la puissance volumique — les deux autres étant le compresseur mécanique et l'injection gazeuse."
                    },
                    {
                        id: 2,
                        texte: "ULe rôle du turbocompresseur est d'augmenter le taux de dioxygène (O2) dans chaque cylindre en comprimant l'air d'admission1. Le principe est d'augmenter la pression des gaz admis, permettant un meilleur remplissage des cylindres en mélange air/carburant (rapport stœchiométrique), permettant soit d'augmenter la puissance d'un moteur atmosphérique soit de réduire la consommation avec un moteur de plus faible cylindrée."
                    },
                    {
                        id: 3,
                        texte: "Ce type de compresseur est entraîné par une turbine (d'où son nom) animée par la vitesse des gaz d’échappement sortant du bloc-moteur, qui cèdent une partie de leur énergie cinétique pour faire tourner la turbine, sans consommer de puissance sur l'arbre moteur."
                    }
                ]
            },
            {
                id: 2,
                nom: "Atmosphérique",
                image: require("../../assets/images/Atmo.jpg"),
                textes: [
                    {
                        id: 1,
                        texte: "Un moteur atmosphérique dépend uniquement de la pression extérieure et non de celle d’un compresseur ou d'un turbocompresseur."
                    },
                    {
                        id: 2,
                        texte:"Ce type de moteur est utilisé pour les motos et pour de nombreuses voitures de sport, afin de réduire le temps de latence d’un turbocompresseur."
                    },
                    {
                        id: 3,
                        texte:"En 2021, pour les moteurs à quatre temps des voitures, cette technologie disparaît peu à peu privilégiant le moteur suralimenté permettant de réduire la cylindrée et donc le poids d'ensemble du véhicule."
                    },
                ]
            },
            {
                id: 3,
                nom: "Wankel (rotatif)",
                image: require("../../assets/images/Wankel.jpg"),
                textes: [
                    {
                        id: 1,
                        texte: "Le moteur Wankel est un moteur à piston rotatif fonctionnant selon le cycle de Beau de Rochas, dans lequel un piston « triangulaire » convertit l'énergie issue de la combustion du carburant en une énergie mécanique de rotation transmise à l'arbre moteur via un maneton. Le moteur Wankel est couramment et improprement désigné comme « moteur rotatif ». Le terme « moteur à piston rotatif » est plus approprié car, historiquement, les « moteurs rotatifs » sont des moteurs à bloc culasse tournante, fréquents au début de l'aviation."
                    },
                    {
                        id: 2,
                        texte:"Contrairement au moteur à piston, au mouvement linéaire dans un cylindre, le moteur Wankel n'utilise pas de système bielle-manivelle. Il n'engendre aucun mouvement alternatif, ce qui réduit les transformations de mouvement, les frottements, les vibrations et le bruit. L'ensemble comporte également un nombre de pièces réduit. Ces avantages en font une solution technique séduisante ; il trouve une large gamme d'applications dans tous les domaines des transports (automobiles, motos, aéronefs). Son utilisation dans des véhicules de série reste néanmoins minoritaire, principalement en raison de sa consommation importante et de problèmes d'étanchéité inhérents à la géométrie complexe du stator."
                    },
                    {
                        id: 3,
                        texte:"Le principe du moteur Wankel repose sur celui de la pompe à palettes, qui remonte à la deuxième moitié du xvie siècle. Mais c'est seulement dans les années 1950 que le moteur est développé, sous sa forme actuelle, par celui qui lui a laissé son nom, l'ingénieur allemand Felix Wankel de NSU, qui sera le premier constructeur à l'utiliser sur des motos, avant de céder la licence à d'autres constructeurs, notamment Mercedes-Benz, Citroën et Mazda. NSU s'associe avec Citroën en 1967 pour créer la société COMOTOR qui produira les moteurs de la NSU Ro 80, de la Citroën GS Birotor, ainsi que des moteurs prototypes, notamment celui qui équipait l'hélicoptère Citroën ou encore des prototypes de la CX. En 2010, dans le secteur automobile, le constructeur Mazda intègre encore ce moteur à ses véhicules et il est envisagé comme moteur complémentaire dans des motorisations hybrides."
                    },
                ]
            }
        ]
    }
]

export default function DogScreen({navigation}){
    return (
        <SafeAreaView style={styles.container}>
            <PageTitle title="Les moteurs thermiques" color="black" style={{flex:1}}/>
            <View style={{flex:14}}>
                <ScrollView>
                    {
                        datas.map((data)=> (

                            <TouchableOpacity 
                                    key={data.id} 
                                    style={styles.card} 
                                    onPress={()=>navigation.navigate("DogDetail", {data:data})}>
                                <Text style={styles.titre}>{data.titre}</Text>
                                <Image source={data.image} style={[styles.image, {height:(width-50)*data.imgHeight/data.imgWidth}]}/>
                            </TouchableOpacity>
                        ))
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
    image:{
        width:width-50,
        marginHorizontal:20,
        marginBottom:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    titre:{
        fontFamily:"openSansItalic",
        fontSize:30,
        backgroundColor:"#11AD58",
        color:"#fff",
        textAlign:"center",
        marginHorizontal:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
})