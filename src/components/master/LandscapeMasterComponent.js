import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content } from 'native-base';

import PortraitMasterComponent from '../master/PortraitMasterComponent'

import GlobalStyle from '../../GlobalStyle'

export default class LandscapeMasterComponent extends Component {
    render () {
        return (
            <Container>
                <View style={{flexDirection: "row"}}>
                    <View style={{flex:1}}>
                        <PortraitMasterComponent
                            PRitems={this.props.PRitems}
                        />
                    </View>
                    <View style={{flex:1}}>
                        <Content>
                            <View style={[GlobalStyle.headerBox, {marginVertical: 30}]}>
                                <View style={[GlobalStyle.titleRow, {justifyContent: "center"}]}>
                                    <Text style={GlobalStyle.statusText}>No PR / PO Selected.</Text>
                                </View>
                            </View>
                        </Content>
                    </View>
                </View>
            </Container>
        )
    }
}


               