import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button, Tabs, Tab } from 'native-base';
import GlobalStyle from '../../GlobalStyle';

import Tab1 from '../tab/TabDetail';
import Tab2 from '../tab/TabItems';
import Tab3 from '../tab/TabAttachment';

export default class TabsComponent extends Component {
    render () {
        var tabs1, tabs2, tabs3 = null;
        tabs1 = <Tab1
            itemsFromTaskAPI={this.props.itemsFromTaskAPI}
            itemsFromDetailAPI={this.props.itemsFromDetailAPI}
        />;
        tabs2 = <Tab2
            itemsFromTaskAPI={this.props.itemsFromTaskAPI}
            itemsFromDetailAPI={this.props.itemsFromDetailAPI}
            screenType={this.props.screenType}
        />;
        tabs3 = <Tab3
            itemsFromDetailAPI={this.props.itemsFromDetailAPI}
        />;

        return (
            <Tabs initialPage={0} tabBarUnderlineStyle={GlobalStyle.tabBarUnderlineStyle}>
                <Tab heading="Detail" tabStyle={GlobalStyle.tabBarStyle} textStyle={GlobalStyle.tabTextStyle} activeTabStyle={GlobalStyle.tabActive} activeTextStyle={GlobalStyle.tabTextActive}>
                    { tabs1 }
                </Tab>
                <Tab heading="Items" tabStyle={GlobalStyle.tabBarStyle} textStyle={GlobalStyle.tabTextStyle} activeTabStyle={GlobalStyle.tabActive} activeTextStyle={GlobalStyle.tabTextActive}>
                    { tabs2 }
                </Tab>
                <Tab heading="Attachment" tabStyle={GlobalStyle.tabBarStyle} textStyle={GlobalStyle.tabTextStyle} activeTabStyle={GlobalStyle.tabActive} activeTextStyle={GlobalStyle.tabTextActive}>
                    { tabs3 }  
                </Tab>
            </Tabs>
        )
    }
}
