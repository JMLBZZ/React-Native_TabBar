import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ImageBackground, Dimensions} from "react-native";

//on importe le composant createBottomTabNavigator
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

//On importe les écrans de la tab:
import HomeStack from "./HomeStack";
import CatStack from "./CatStack";
import DogStack from "./DogStack";

//On importe les icones qu'on souhaite utiliser :
import { Octicons, Ionicons, Foundation, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

// instanciation de la tabBar
const Tab = createBottomTabNavigator();

//On exporte le tabBar
export default function TabNavigator(){
    return(
        <Tab.Navigator screenOptions={
            ({route})=>({
                //On définit les options de chaque Tab de la tabBar (icone, biblio, couleur...) :
                tabBarIcon:({focused, color, size})=>{
                    //On déclare une variable pour la biblio d'icône et une pour le nom de l'icône :
                    let IconLibrary;//!\il est important que le nom ai une majuscule car c'est un pointeur
                    let iconName;
                    //On vérifie le nom de la route :
                    if(route.name==="HomeStack"){
                        iconName = "home";//nom de l'icon du site internet icons.expo.fyi
                        IconLibrary = Foundation;//nom de la librairie de l'icone (préalablement importé)
                        color = focused ? "#BDC3C7" : "#333";//si c'est actif (page visitée), le logo sera marron, sinon gris
                    }else if(route.name==="CatStack"){
                        iconName = "electrical-services";
                        IconLibrary = MaterialIcons;
                        color = focused ? "#BDC3C7" : "#333";
                    }else if(route.name==="DogStack"){
                        iconName = "engine";
                        IconLibrary = MaterialCommunityIcons;
                        color = focused ? "#BDC3C7" : "#333";
                    }//fin de if
                    //On retourne l'icone
                    return<IconLibrary name={iconName} size={size} color={color}/>
                },//fin de tabBarIcon

                //On définit la couleur du label :
                tabBarLabel:({focused, color})=>{
                    let label;
                    if(route.name==="HomeStack"){
                        color = focused ? "#BDC3C7" : "#333";
                        label = "Accueil";
                    }else if(route.name==="CatStack"){
                        color = focused ? "#BDC3C7" : "#333";
                        label = "Électrique";
                    }else if(route.name==="DogStack"){
                        color = focused ? "#BDC3C7" : "#333";
                        label = "Thermique";
                    }//fin de if
                    return <Text style={{color:color}}>{label}</Text>
                },//fin de tabBarLabel

                // On définit la couleur de la tabBar:
                tabBarStyle:{backgroundColor:"#262523",},

                headerShown: false,
            })
        }>
            <Tab.Screen name="HomeStack" component={HomeStack} />
            <Tab.Screen name="DogStack" component={DogStack} />
            <Tab.Screen name="CatStack" component={CatStack} />
        </Tab.Navigator>
    );
}