import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import GlobalStyle from '../../GlobalStyle';
import { Content, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import idr from '../../libraries/idr';

export default class TabDetail extends Component {
    render () {
        return (
            <Content style={{padding: 10}}>
                
                <View style={GlobalStyle.itemTextAlign}>
                    <Text style={GlobalStyle.headingText}>Document Type : </Text>
                    <Text style={GlobalStyle.contentText}>Academic - Primary{"\n"}</Text>
                </View>

                <View style={GlobalStyle.itemTextAlign}>
                    <Text style={GlobalStyle.headingText}>PR Reference : </Text>
                    <Text style={GlobalStyle.contentText}>{this.props.itemsFromTaskAPI.number}{"\n"}</Text>
                </View>

                <View style={GlobalStyle.itemTextAlign}>
                    <Text style={GlobalStyle.headingText}>Purchase date : </Text>
                    <Text style={GlobalStyle.contentText}>05/05/2018{"\n"}</Text>
                </View>

                <View style={GlobalStyle.itemTextAlign}>
                    <Text style={GlobalStyle.headingText}>Transfer Date : </Text>
                    <Text style={GlobalStyle.contentText}>07/05/2018{"\n"}</Text>
                </View>

                <View style={GlobalStyle.itemTextAlign}>
                    <Text style={GlobalStyle.headingText}>Cash Date : </Text>
                    <Text style={GlobalStyle.contentText}>07/05/2018{"\n"}</Text>
                </View>

                <Text style={GlobalStyle.headingText}>Purchase Purpose : </Text>
                <Text style={GlobalStyle.contentText}>buy items for the new office building{"\n"}</Text>

            </Content>
        )
    }
}