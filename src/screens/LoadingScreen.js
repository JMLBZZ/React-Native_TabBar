import React from 'react';
import {Text, StyleSheet, SafeAreaView} from "react-native";


export default function LoadingScreen() {
    return(
        <SafeAreaView style={styles.loading}>
            <Text style={styles.text}>Chargement...</Text>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        color: "#fff",
        fontSize: 12,
    }
});
