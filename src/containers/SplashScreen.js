import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import delay from '../libraries/timeoutPromise';
import {APIRoot} from '../Const';
import user from '../models/User'

export default class SplashScreen extends Component { 

  componentDidMount () {
    Promise.all([
      delay(1500)
    ])
    .then(() => {
      user.validateToken()
        .then((result) => {
          result = JSON.parse(result)
          console.log(result)
          if(!result) Actions.login()
          else Actions.master()
      })
    })
  }
  
  render() {

    return (
        <View style={{flex: 1, padding: 20, margin: 0, backgroundColor: "#c71101", alignItems: "center", justifyContent: "center"}}>
            <Image resizeMethod="resize" source={ require("../images/RODAMAS-logo-(edited).png") } style={{flex:0.8, width: "50%", height: "auto", resizeMode: "contain", justifyContent:"center"}} />
        </View>
    );
  }
}