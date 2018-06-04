import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container } from 'native-base';

import PortraitMasterComponent from '../master/PortraitMasterComponent'
import PortraitMasterDetailComponent from '../masterdetail/PortraitMasterDetailComponent'

// import GlobalStyle from '../../GlobalStyle'

export default class PRLandscapeMasterDetailComponent extends Component {
    render () {
        return (
            <Container>
                <View style={{flex: 1, flexDirection: "row"}}>
                    <View style={{flex:1}}>
                        <PortraitMasterComponent
                            PRitems={this.props.PRitems}
                        />
                    </View>
                    <View style={{flex:1}}>
                        <PortraitMasterDetailComponent
                            itemsFromDetailAPI={this.props.itemsFromDetailAPI}
                            itemsFromTaskAPI={this.props.itemsFromTaskAPI}
                            id={this.props.id}
                            status={this.props.status}
                            screenType={this.props.screenType}
                        />
                    </View>
                </View>
            </Container>
        )
    }
}


               