import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, List, ListItem, Body, Left, Right, Button, Tabs, Tab } from 'native-base';
import HeaderMasterDetail from '../headerdetail/HeaderMasterDetail'
import PRTabsComponent from '../tab/TabsComponent';
import PRFooterComponent from '../footer/FooterComponent';
import GlobalStyle from '../../GlobalStyle';
import idr from '../../libraries/idr';

export default class PRPortraitMasterDetailComponent extends Component {
    render () {
        var tabsContent, footerContent = null;
        tabsContent = <PRTabsComponent
            screenType={this.props.screenType}
            itemsFromDetailAPI={this.props.itemsFromDetailAPI}
            itemsFromTaskAPI={this.props.itemsFromTaskAPI}
        />;
        footerContent = <PRFooterComponent
            itemsFromTaskAPI={this.props.itemsFromTaskAPI}
            id={this.props.id}
        />;

        return (
            <Container>
                <HeaderMasterDetail itemsFromTaskAPI={this.props.itemsFromTaskAPI}/>
                {tabsContent}
                {this.props.screenType === "master" ? footerContent : null}
            </Container>
        )
    }
}


               