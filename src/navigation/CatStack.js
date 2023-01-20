import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

//import des écrans de la pile :
import CatScreen from "../screens/CatScreen";
import CatDetail from "../screens/CatDetail";
import CustomHeader from "../components/CustomHeader";

import catIcon from "../../assets/images/icon-EV.png";


//instanciation de la stack :
const Stack = createStackNavigator();

export default function CatStack(){

    return(
        <Stack.Navigator screenOptions = {{gestureEnable:true}}>
            <Stack.Screen name="CatScreen" component={CatScreen} options={{headerShown:false}} />
            <Stack.Screen 
                name="CatDetail" 
                component={CatDetail} 
                options={{
                    color:"white",
                    headerStyle: { backgroundColor: "grey"}, 
                    headerTitle: (props) => <CustomHeader {...props}  title="Détail" color="transparent" icon={catIcon} titleColor="#fff"/>
                }}/>
        </Stack.Navigator>
    );
};
