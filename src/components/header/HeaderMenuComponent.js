import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    StyleSheet,
    Image
  } from 'react-native';
import { Header, Left, Body, Right, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

export default class HeaderMenuComponent extends Component {
    render() {
        return (
            <Header style={{backgroundColor: "#c71101"}}>
                <Left>
                    <Button onPress={() => this.context.drawer.open()} transparent>
                        <Icon name="bars" style={{color: "#fff", fontSize: 20}}/>
                    </Button>
                </Left>
                <Body>
                    <Image resizeMethod="resize" source={require("../../images/RODAMAS-logo-(edited).png")} style={{width: 200, height: 35, resizeMode: "contain"}} />
                </Body>
                <Right>
                    <Button transparent onPress={() => Actions.search() }>
                        <Icon name="search" style={{color: "#fff", fontSize: 20}}/>
                    </Button>
                </Right>
            </Header>  
        )
    }
}

HeaderMenuComponent.contextTypes = {
    drawer: PropTypes.object
}