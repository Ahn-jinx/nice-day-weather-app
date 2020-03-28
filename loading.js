import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import {Animated, Easing} from 'react-native';

export default function Loading(){
    return(
        <View style={styles.container}>
            <View style={styles.textBox}><Text style={styles.text}>Let's get the weather !</Text></View>
        </View>
    )
};

const styles = StyleSheet.create({
    textBox: {
        flex: 0.14,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },

    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical:80,
    
    },
    
    text: {
        fontSize: 25,
        color: '#2c2c2c'
    }




})