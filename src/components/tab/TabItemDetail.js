import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import {ListItem, List, Body, Container} from 'native-base';
import GlobalStyle from '../../GlobalStyle';

export default class PRTabItemDetail extends Component {
    constructor(props){
        super(props);
        this.state = 
        {
            items: []
        }
    }

    render () {

        return (
            <ScrollView>
            <View>
                <List key={this.props.dataItem.id}>
                    <ListItem>
                        <Body>
                            <View style={GlobalStyle.itemTextAlign}>
                                <Text style={GlobalStyle.headingText}>Account Assignment : </Text>
                                <Text style={GlobalStyle.contentText}>{this.props.dataItem.accountAssign}{"\n"}</Text>
                            </View>
                            
                            { this.props.dataItem.accountAssign === 'Asset' ?
                                <View style={GlobalStyle.itemTextAlign}>
                                    <Text style={GlobalStyle.headingText}>Asset Number : </Text>
                                    <Text style={GlobalStyle.contentText}>{this.props.dataItem.assetNumber}{"\n"}</Text>
                                </View>: 
                                <View style={GlobalStyle.itemTextAlign}>
                                    <Text style={GlobalStyle.headingText}>Order Number : </Text>
                                    <Text style={GlobalStyle.contentText}>{this.props.dataItem.orderNumber}{"\n"}</Text>
                                </View>
                            }

                            <View style={GlobalStyle.itemTextAlign}>
                                <Text style={GlobalStyle.headingText}>Item Subjek : </Text>
                                <Text style={GlobalStyle.contentText}>{this.props.dataItem.itemSubject}{"\n"}</Text>
                            </View>

                            <View style={GlobalStyle.itemTextAlign}>
                                <Text style={GlobalStyle.headingText}>Item Material : </Text>
                                <Text style={GlobalStyle.contentText}>{this.props.dataItem.itemMaterial}{"\n"}</Text>
                            </View>

                            <View style={GlobalStyle.itemTextAlign}>
                                <Text style={GlobalStyle.headingText}>Item Name : </Text>
                                <Text style={GlobalStyle.contentText}>{this.props.dataItem.itemName}{"\n"}</Text>
                            </View>

                            <Text style={GlobalStyle.headingText}>Item Description : </Text>
                            <Text style={GlobalStyle.contentText}>{this.props.dataItem.itemDescription}{"\n"}</Text>

                            <View style={GlobalStyle.itemTextAlign}>
                                <Text style={GlobalStyle.headingText}>Item Quantity : </Text>
                                <Text style={GlobalStyle.contentText}>{this.props.dataItem.itemQty}{"\n"}</Text>
                            </View>

                            <View style={GlobalStyle.itemTextAlign}>
                                <Text style={GlobalStyle.headingText}>Item UOM : </Text>
                                <Text style={GlobalStyle.contentText}>{this.props.dataItem.itemUOM}{"\n"}</Text>
                            </View>

                            <View style={GlobalStyle.itemTextAlign}>
                                <Text style={GlobalStyle.headingText}>Item Unit Price : </Text>
                                <Text style={GlobalStyle.contentText}>{this.props.dataItem.itemUnitPrice}{"\n"}</Text>
                            </View>

                            <View style={GlobalStyle.itemTextAlign}>
                                <Text style={GlobalStyle.headingText}>Item Price : </Text>
                                <Text style={GlobalStyle.contentText}>{this.props.dataItem.itemPrice}{"\n"}</Text>
                            </View>

                            {this.props.dataItem.currencyRate != null ? 
                            <View style={GlobalStyle.itemTextAlign}>
                                <Text style={GlobalStyle.headingText}>Currency Rate : </Text>
                                <Text style={GlobalStyle.contentText}>{this.props.dataItem.currencyRate}{"\n"}</Text>
                            </View>
                            : null}

                            <View style={GlobalStyle.itemTextAlign}>
                                <Text style={GlobalStyle.headingText}>Delivery Date : </Text>
                                <Text style={GlobalStyle.contentText}>{this.props.dataItem.deliveryDate}{"\n"}</Text>
                            </View>

                            <View style={GlobalStyle.itemTextAlign}>
                                <Text style={GlobalStyle.headingText}>Cost Center : </Text>
                                <Text style={GlobalStyle.contentText}>{this.props.dataItem.costCenter}{"\n"}</Text>
                            </View>

                            <View style={GlobalStyle.itemTextAlign}>
                                <Text style={GlobalStyle.headingText}>GL Account : </Text>
                                <Text style={GlobalStyle.contentText}>{this.props.dataItem.glAccount}</Text>
                            </View>

                            <View style={GlobalStyle.itemTextAlign}>
                                <Text style={GlobalStyle.headingText}>Vendor : </Text>
                                <Text style={GlobalStyle.contentText}>{this.props.dataItem.vendor}{"\n"}</Text>
                            </View>

                            <Text style={GlobalStyle.headingText}>Vendor Note : </Text>
                            <Text style={GlobalStyle.contentText}>{this.props.dataItem.vendorNote}{"\n"}</Text>

                            <View style={GlobalStyle.itemTextAlign}>
                                <Text style={GlobalStyle.headingText}>Last Approval : </Text>
                                <Text style={GlobalStyle.contentText}>{this.props.dataItem.lastApproval}{"\n"}</Text>
                            </View>

                        </Body>
                    </ListItem>
                </List>
            </View>
            </ScrollView>
        )
    }
}