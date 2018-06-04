import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Header, List, ListItem, Body, Left, Right, Button, Tabs, Tab } from 'native-base';
import GlobalStyle from '../../GlobalStyle';
import idr from '../../libraries/idr';
import { getTextStyle } from '../../Global';

export default class HeaderMasterDetail extends Component {
    render () {
        return (
            <Header span style={{ backgroundColor: '#fff' }}>
            <Container style={GlobalStyle.headerBox}>
                <View style={GlobalStyle.titleRow}>
                    <Left>
                        <Text style={GlobalStyle.titleText}>{this.props.itemsFromTaskAPI.number} / {this.props.itemsFromTaskAPI.requestor}</Text>
                    </Left>
                </View>
                <View style={GlobalStyle.subtitleRow}>
                    <Left>
                        <Text style={GlobalStyle.subtitleText}>Created on: {this.props.itemsFromTaskAPI.created_time}</Text>
                    </Left>
                    <Right style={{flexDirection:'row', justifyContent: "flex-end"}}>
                        <Text style={GlobalStyle.subtitleText}>Priority : </Text>
                        <Text style={getTextStyle(this.props.itemsFromTaskAPI.priority)}>{this.props.itemsFromTaskAPI.priority}  </Text>
                    </Right>
                </View>
            </Container>
            </Header>
        )
    }
}


               