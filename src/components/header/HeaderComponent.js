import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Platform
  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Left, Body, Right, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HeaderMenuComponent extends Component {
    render() {
        return (
            <Header style={{backgroundColor: "#c71101"}}>
                <Left style={{
                        ...Platform.select({
                            ios: { flex: 1 },
                            android: { flex: 0.5 }
                        }),
                        flexDirection: "row", justifyContent: "flex-start"
                    }}>
                    <Button style={{marginRight: 25}} onPress={() => this.context.drawer.open()} transparent>
                        <Icon name="bars" style={{color: "#fff", fontSize: 20}}/>
                    </Button>
                    <Button style={{paddingBottom: 8}}
                        onPress={() => {
                                setTimeout(()=> {Actions.refresh({refresh: false})}, 500); Actions.pop();
                            }}
                        transparent>
                        <Icon name="angle-left" style={{color: "#fff", fontSize: 28}}/>
                    </Button>
                </Left>
                <Body>
                    <Image resizeMethod="resize" source={require("../../images/RODAMAS-logo-(edited).png")} style={{width: 200, height: 35, resizeMode: "contain"}} />
                </Body>
                <Right>
                    <Button transparent onPress={() => Actions.search()}>
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