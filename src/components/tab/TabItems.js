import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import {ListItem, List, Body, Container, CheckBox, Separator, Left, Right} from 'native-base';
import GlobalStyle from '../../GlobalStyle';
import { Actions } from 'react-native-router-flux';

export default class PRTabItems extends Component {
    constructor(props){
        super(props);
    }

    goToItemDetail = (data) => {
        
    }

    renderItem(item, idx){
        var arrList = []
        for(i = 0 ; i < idx ; i++){
            arrList.push(<List key={item[i].id}>
                <ListItem onPress={() => this.goToItemDetail(item[i])}>
                    <Body>
                        <View style={GlobalStyle.itemTextAlign}>
                            <Text style={GlobalStyle.headingText}>Item Name : </Text>
                            <Text style={GlobalStyle.contentText}>{item[i].itemName}{"\n"}</Text>
                        </View>

                        <View style={GlobalStyle.itemTextAlign}>
                            <Text style={GlobalStyle.headingText}>Item Quantity : </Text>
                            <Text style={GlobalStyle.contentText}>{item[i].itemQty} {item[i].itemUOM}{"\n"}</Text>
                        </View>

                        <View style={GlobalStyle.itemTextAlign}>
                            <Text style={GlobalStyle.headingText}>Item Price : </Text>
                            <Text style={GlobalStyle.contentText}>{item[i].itemPrice}{"\n"}</Text>
                        </View>
                    </Body>
                    <Right>
                        {this.props.screenType === 'master' ? <CheckBox checked={item[i].approved} /> : null}
                    </Right>
                </ListItem>
            </List>)
        }
        return arrList
    }

    render () {

        var itemArr = []
        itemArr.push({
            id: 1,
            accountAssign: 'Asset',
            assetNumber: '10800201',
            itemName: "Calculator",
            itemCode: 'C0004',
            itemQty: "10",
            itemUOM: "Unit",
            itemUnitPrice: "IDR 125,000",
            itemPrice: "IDR 1,250,000",
            currencyRate: null,
            itemDescription: "Scientific calculator",
            deliveryDate: "25/04/2018",
            costCenter: "Accounting",
            glAccount: "Asset Tetap",
            itemSubject: 'Alat Tulis',
            itemMaterial: "Calculator",
            vendor: 'PT ATK Sejahtera ',
            vendorNote: 'Pre Order',
            lastApproval: 'Santo / 25-04-2018 13:00:20',
            approved: true
        },
        {
            id: 2,
            accountAssign: 'Order',
            orderNumber: '20800202',
            itemName: "Printer",
            itemDescription: 'Canon MD50Z',
            itemQty: "2",
            itemUOM: "Unit",
            itemUnitPrice: "IDR 500,000",
            itemPrice: "IDR 1,000,000",
            currencyRate: null,
            itemDescription: "Printer untuk keperluan kantor",
            deliveryDate: "25/04/2018",
            costCenter: "Accounting",
            glAccount: "Asset Tetap",
            itemSubject: 'Alat Tulis',
            itemMaterial: "Calculator",
            vendor: 'PT ATK Sejahtera ',
            vendorNote: 'Pre Order',
            lastApproval: 'Rudy / 25-04-2018 13:00:20',
            approved: true
        },
        {
            id: 3,
            accountAssign: 'Order',
            orderNumber: '20800205',
            itemName: "Pulpen",
            itemDescription: 'Pulpen Faster',
            itemQty: "2",
            itemUOM: "Lusin",
            itemUnitPrice: "IDR 25,000",
            itemPrice: "IDR 50,000",
            currencyRate: null,
            itemDescription: "Pulpen untuk alat tulis kantor",
            deliveryDate: "25/04/2018",
            costCenter: "Accounting",
            glAccount: "Asset Tetap",
            itemSubject: 'Alat Tulis',
            itemMaterial: "Calculator",
            vendor: 'PT ATK Sejahtera ',
            vendorNote: 'Pre Order',
            lastApproval: 'Santo / 25-04-2018 13:00:20',
            approved: true
        },
        {
            id: 4,
            accountAssign: 'Order',
            orderNumber: '20800202',
            itemName: "Printer",
            itemDescription: 'Canon MD50Z',
            itemQty: "2",
            itemUOM: "Unit",
            itemUnitPrice: "IDR 500,000",
            itemPrice: "IDR 1,000,000",
            currencyRate: null,
            itemDescription: "Printer untuk keperluan kantor",
            deliveryDate: "25/04/2018",
            costCenter: "Accounting",
            glAccount: "Asset Tetap",
            itemSubject: 'Alat Tulis',
            itemMaterial: "Calculator",
            vendor: 'PT ATK Sejahtera ',
            vendorNote: 'Pre Order',
            lastApproval: 'Jonathan / 25-04-2018 13:00:20',
            approved: true
        })

        return (
            <ScrollView>
            <View>
            <Separator bordered style={{ paddingLeft : 0 }}>
                <ListItem>
                    <Left>
                        <Text style={GlobalStyle.headingText}>Total Item ({itemArr.length})</Text>
                    </Left>
                    <Right>
                        {this.props.screenType === 'master' ? <CheckBox checked={true} /> : null}
                    </Right>
                </ListItem>
            </Separator>
            { this.renderItem(itemArr, itemArr.length) }
            </View>
            </ScrollView>
        )
    }
}