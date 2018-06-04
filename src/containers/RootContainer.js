import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import NavigationRouter from '../navigations/NavigationRouter'
import MasterScreen from '../containers/MasterScreen'

export default class RootContainer extends Component {
    render() {
      return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor="#c71101"/>
            <NavigationRouter/>
        </View>
      );
    }
  }