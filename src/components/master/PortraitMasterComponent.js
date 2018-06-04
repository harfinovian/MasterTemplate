import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { Container, Content, List, ListItem, Body, Left, Right, Button, Tabs, Tab } from 'native-base';
import GlobalStyle from '../../GlobalStyle';
import PRCard from '../card/ItemCardList'

export default class PortraitMasterComponent extends Component {
    constructor(props){
        super(props);
        this.state = 
        {
            PRitems: []
        }
    }
    render () {
        return (
            <Container>
                <List>
                    {this.props.PRitems.length === 0 ? <View style={[GlobalStyle.headerBox, {marginVertical: 30}]}>
                        <View style={[GlobalStyle.titleRow, {justifyContent: "center"}]}>
                            <Text style={GlobalStyle.statusText}>No Purchase Request Found.</Text>
                        </View>
                    </View> : null}
                    { this.props.PRitems.map((item) => 
                        <PRCard PRitem={item} />
                    )}
                </List>
            </Container>
        )
    }
}
