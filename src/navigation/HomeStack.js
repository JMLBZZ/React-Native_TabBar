import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

//import des écrans de la pile :
import HomeScreen from "../screens/HomeScreen";
import HomeDetailScreen from "../screens/HomeDetailScreen";

//instanciation de la stack :
const Stack = createStackNavigator();

export default function HomeStack(){
    return(
        <Stack.Navigator screenOptions = {{gestureEnable:true}}>
            <Stack.Screen name="HomeStack" component={HomeScreen} options={{headerShown:false}} />
            <Stack.Screen name="Details" component={HomeDetailScreen} options={{headerShown:false}} />
        </Stack.Navigator>
    );
};



