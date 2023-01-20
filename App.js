import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// On importe useFonts de expo-font
import { useFonts } from 'expo-font';
import LoadingScreen from './src/screens/LoadingScreen';

// On import "NavigationContainer"  qui doit être unique dans toute l'application
import {NavigationContainer} from "@react-navigation/native";

import TabNavigator from './src/navigation/TabNavigator';

export default function App() {
  let [fontsLoaded] = useFonts({
    "lily": require("./assets/fonts/LilyScriptOne-Regular.ttf"),
    "openSansItalic": require("./assets/fonts/OpenSans-Italic.ttf"),
    "openSansRegular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "gochi": require("./assets/fonts/GochiHand-Regular.ttf"),
  });
  
  if(!fontsLoaded) return <LoadingScreen />

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}


