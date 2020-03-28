import React from 'react'
import { View, Text, StyleSheet,StatusBar } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherPageOption = {
    Mist: {
        icon: "weather-fog",
        gradient: ['#5d4157', '#a8caba'],
        title: "",
        subTitle: "I wish You a Nice day :D"},
    Thunderstorm: {icon: "weather-lightning",
          gradient: ['#3d7eaa', '#ffe47a'],
            title: "",
            subTitle: "I wish You a Nice day :D"},
    Drizzle: {icon: "weather-rainy",
          gradient: ['#085078', '#85d8ce'],
            title: "",
            subTitle: "I wish You a Nice day :D"},
    Rain: {icon: "weather-pouring",
          gradient: ['#5c258d', '#4389a2'],
            title: "",
            subTitle: "I wish You a Nice day :D"},
    Snow: {icon: "weather-snowy",
          gradient: ['#283048', '#859398'],
            title: "",
            subTitle: "I wish You a Nice day :D"},
    Dust: {icon: "weather-fog",
          gradient: ['#1d2b64', '#f8cdda'],
            title: "",
            subTitle: "I wish You a Nice day :D"},
    Haze: {icon: "weather-fog",
          gradient: ['#d3959b','#bfe6ba'],
            title: "",
            subTitle: "I wish You a Nice day :D"},
    Fog: {icon: "weather-fog",
          gradient: ['#403b4a', '#e7e9bb'],
            title: "",
            subTitle: "I wish You a Nice day :D"},      
    Clear: {icon: "weather-sunny",
          gradient: ['#ff512f', '#dd2476'],
            title: "",
            subTitle: "I wish You a Nice day :D"},
    Clouds: {icon: "weather-cloudy",
          gradient: ['#1f1c2c', '#928dab'],
            title: "",
            subTitle: "I wish You a Nice day :D"}
  ,
  }

export default function Weather({ temp, condition }) {

    return (
        //<View style={styles.container}>
            <LinearGradient
                colors={weatherPageOption[condition].gradient}
                style={styles.container}
                >
                <StatusBar barStyle="light-content" hidden={false}/>

                <View style={styles.halfCon}> 
                    <MaterialCommunityIcons name={weatherPageOption[condition].icon} size={90} color="white"></MaterialCommunityIcons>
                    <Text style={styles.temp}>{temp} °C</Text>
                </View>

                <View style={{...styles.halfCon, ...styles.contents}}>
                    <Text style={styles.title}>{condition}</Text>
                    <Text style={styles.subTitle}>{weatherPageOption[condition].subTitle}</Text>
                </View>

            </LinearGradient>
        //</View>

    )
}

const styles = StyleSheet.create({
    container: {
        //alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    halfCon: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        color: "white",
    },

    
    temp: {
        color: "white",
        fontSize: 23
    },

    title: {
        color: "white",
        fontSize: 60,
        fontWeight: "300",
        marginBottom: 8,

    },

    subTitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "200"

    },

    contents: {
        alignItems: "flex-start",
        //justifyContent: "flex-start"
        paddingLeft: 45,

    }
})