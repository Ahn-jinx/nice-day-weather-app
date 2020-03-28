import React from 'react';
import Loading from './loading'
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { View, Text } from 'react-native';
import {Alert} from 'react-native';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = 'cb92003381bfc14649d0e57feb16a812'


export default class App extends React.Component {
  state = {
    errorText: null,
    location: null,
    isLoading : true,
    tempo: null,
    condition: null,
  }

  
  constructor(props){
    super(props);
  }


  componentDidMount(){
    this.getLocation();
  }


  getLocation = async() => {
    try{
    const request = await Location.requestPermissionsAsync()
    const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync()
  
    const {data:{main:{temp}, weather}} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)

    this.setState({tempo: temp, condition: weather[0].main})
    this.setState({isLoading: false})
  
  }catch(error){
    Alert.alert('denied', 'sorrowful')
  }

  }


  render(){
    let {isLoading, tempo, condition} = this.state;
    return (
      isLoading === true? <Loading></Loading> : <Weather temp={Math.round(tempo)} condition={condition}></Weather>
    )
  }
};