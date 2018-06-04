import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import GlobalStyle from '../../GlobalStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Content, List, ListItem, Body, Left, Right, Button, Tabs, Tab } from 'native-base';
import { getTextStyle } from '../../Global';

export default class PRCard extends Component { 
  
  render() {
    return (
        <ListItem key={this.props.PRitem.pr_id} onPress={() => Actions.masterDetail({
                                                                id: this.props.PRitem.pr_id,
                                                                number: this.props.PRitem.pr_number,
                                                                reference: this.props.PRitem.pr_reference,
                                                                document_type: this.props.PRitem.pr_doc_type,
                                                                requestor: this.props.PRitem.pr_requestor,
                                                                priority: this.props.PRitem.pr_priority,
                                                                status: this.props.PRitem.pr_release_status,
                                                                subject: this.props.PRitem.pr_subject,
                                                                created_time: this.props.PRitem.pr_created_time,
                                                                screenType: 'master'
                                                            })}>
            <Body>
                <View style={GlobalStyle.titleRow}>
                    <Left>
                        <Text style={GlobalStyle.titleText}>{this.props.PRitem.pr_number}</Text>
                        <Text note style={[GlobalStyle.subtitleText, {fontWeight: "600"}]}>{this.props.PRitem.pr_doc_type}</Text>
                    </Left>
                </View>
                <Text note style={[GlobalStyle.subtitleText, {fontWeight: "600"}]}>{this.props.PRitem.pr_requestor} / {this.props.PRitem.pr_created_time}</Text>
                <Text note style={GlobalStyle.subtitleText}>{this.props.PRitem.pr_purchase_purpose}</Text>
            </Body>
            <Right style={GlobalStyle.statusTextAlign}>
                <Text style={getTextStyle(this.props.PRitem.pr_priority)}>{this.props.PRitem.pr_priority}  </Text>
                <Icon name="angle-right" style={GlobalStyle.angleRightStyle}/>
            </Right>
            </ListItem>
    );
  }
}