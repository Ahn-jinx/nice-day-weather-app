import React from 'react';
import Loading from './loading'
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { View, Text } from 'react-native';

export default class App extends React.Component {
  state = {
    errorText: null,
    location: null,
  }
  
  
  constructor(props){
    super(props);
    this._getLocationAsync();

  }

  _getLocationAsync = async () =>{
    let {status} = await Permissions.askAsync(Permissions.LOCATION);
    if (status !=='granted'){
      this.setState({errorText : 'denied XD'})
    } else {
      let {location} = await Location.getCurrentPositionAsync({});
      this.setState({location:location});
    }

  }

  render(){
    return (
          <Loading>
          </Loading>
    )
  }
};