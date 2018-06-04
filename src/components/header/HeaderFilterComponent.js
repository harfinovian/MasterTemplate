import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Platform
  } from 'react-native';
import { Header, Left, Body, Right, Button, Picker, Form, Item } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import Modal from 'react-native-modal'
import DatePicker from 'react-native-datepicker'
import GlobalStyle from '../../GlobalStyle'

export default class HeaderHistoryComponent extends Component {

    constructor(props){
        super(props);

        var today = new Date();
        var end = new Date();
        var dd = today.getDate();
        var mm = today.getMonth();
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd = '0'+dd
        } 

        if(mm<10) {
            mm = '0'+mm
        } 

        today = yyyy + '/' + (mm - 3) + '/' + dd + '/';

        dd = end.getDate();
        mm = end.getMonth() + 1;
        yyyy = end.getFullYear();

        end = yyyy + '/' + mm + '/' + dd + '/';

        this.state = 
        {
            modalFilter: false,
            startDate: today,
            endDate: end,
            isModalVisible: false
        }
    }

    onValueChangeStatus(value) {
        this.setState({
            status: value
        })
    }

    _hideModal = () => this.setState({ 
        isModalVisible: false,
        modalFilter: false
    })

    handleFiterModal = () => {
        this.setState({modalFilter : true, isModalVisible: true})
    }
    
    render() {

        var modalContent;
        
        if (this.state.modalFilter === true) {
            modalContent =  <View>
                                <View style={{flexDirection: "row", justifyContent: "center"}}> 
                                    <Text style={[GlobalStyle.modalContent, {width: 150}]}>Start Date : </Text>
                                    <Text style={[GlobalStyle.modalContent, {width: 150}]}>End Date : </Text>
                                </View>
                                <View style={{flexDirection: "row", justifyContent: "center"}}>
                                    <DatePicker
                                        style={{width: 150}}
                                        date={this.state.startDate}
                                        mode="date"
                                        placeholder="Pilih Tanggal"
                                        format="YYYY-MM-DD"
                                        minDate={this.state.startDate}
                                        maxDate={this.state.endDate}
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                            marginLeft: 36
                                        }
                                        }}
                                        onDateChange={(date) => {this.setState({startDate: date})}}
                                    />
                                    <DatePicker
                                        style={{width: 150}}
                                        date={this.state.endDate}
                                        mode="date"
                                        placeholder="Pilih Tanggal"
                                        format="YYYY-MM-DD"
                                        minDate={this.state.startDate}
                                        maxDate={this.state.endDate}
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                            marginLeft: 36
                                        }
                                        }}
                                        onDateChange={(date) => {this.setState({endDate: date})}}
                                    />
                                    {/* </Form> */}
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                                    <Text style={[GlobalStyle.modalContent, {width: 150}]}>By Status</Text>
                                    <Form style={{width: "100%", borderBottomColor: '#444444', borderBottomWidth: 1}}>
                                        <Picker
                                        style={{width: "100%"}}
                                        iosHeader="Pilih Status"
                                        mode="dropdown"
                                        selectedValue={this.state.status}
                                        onValueChange={this.onValueChangeStatus.bind(this)}
                                        placeholder="Pilih Status"
                                        >
                                        <Picker.Item label="All Status" value="All Status" />
                                        <Picker.Item label="Low" value="Low" />
                                        <Picker.Item label="Medium" value="Medium" />
                                        <Picker.Item label="High" value="High" />
                                        </Picker>
                                    </Form>
                                </View>
                                <View style={{flexDirection: "row", justifyContent: "center", padding : 15}}>
                                    <Button full onPress={() => this._hideModal()} style={GlobalStyle.yesButton}>
                                        <Text style={GlobalStyle.buttonText}>Filter</Text>
                                    </Button>
                                    <Button full onPress={this._hideModal} style={GlobalStyle.noButton}>
                                        <Text style={GlobalStyle.buttonText}>Clear</Text>
                                    </Button>
                                </View>
                            </View>;
        }

        return (
            <View>
                <Header style={{backgroundColor: "#c71101"}}>
                    <Left>
                        <Button onPress={() => this.context.drawer.open()} transparent>
                            <Icon name="bars" style={{color: "#fff", fontSize: 20}}/>
                        </Button>
                    </Left>
                    <Body>
                        <Image resizeMethod="resize" source={require("../../images/RODAMAS-logo-(edited).png")} style={{width: 200, height: 35, resizeMode: "contain"}} />
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.handleFiterModal()}>
                            <Icon name="filter" style={{color: "#fff", fontSize: 20}}/>
                        </Button>
                        <Button transparent onPress={() => Actions.search() }>
                            <Icon name="search" style={{color: "#fff", fontSize: 20}}/>
                        </Button>
                    </Right>
                </Header>  
                <Modal supportedOrientations={['portrait', 'landscape']} 
                    avoidKeyboard={Platform.OS === "ios" ? true : false} 
                    isVisible={this.state.isModalVisible} 
                    onBackButtonPress={this._hideModal} 
                    onBackdropPress={this._hideModal} 
                    backdropOpacity={0.5}>
                        <View style={GlobalStyle.modalStyle}>
                            {modalContent}
                        </View>
                </Modal>
            </View>
        )
    }
}

HeaderHistoryComponent.contextTypes = {
    drawer: PropTypes.object
}