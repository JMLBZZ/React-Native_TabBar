import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

//import des écrans de la pile :
import DogScreen from "../screens/DogScreen";
import DogDetail from "../screens/DogDetail";
import CustomHeader from "../components/CustomHeader";

import dogIcon from "../../assets/images/icon-TH.png";


//instanciation de la stack :
const Stack = createStackNavigator();

export default function DogStack(){

    return(
        <Stack.Navigator screenOptions = {{gestureEnable:true}}>
            <Stack.Screen name="DogScreen" component={DogScreen} options={{headerShown:false}} />
            <Stack.Screen 
                name="DogDetail" 
                component={DogDetail} 
                options={{
                    color:"white",
                    headerStyle: { backgroundColor: "grey"}, 
                    headerTitle: (props) => <CustomHeader {...props}  title="Détail" color="transparent" icon={dogIcon} titleColor="#fff"/>
                }}/>
        </Stack.Navigator>
    );
};
