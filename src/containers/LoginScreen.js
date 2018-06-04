import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Spinner, Toast, Content, Form, Label, Icon, Item, Input, Picker, Button, Tab, Tabs, ScrollableTab } from 'native-base';
import delay from '../libraries/timeoutPromise'
import user from '../models/User'
import { APIRoot }  from '../Const'
import { isNull, isEmail, isLength } from '../libraries/validation'
import { toastError, languageGet, toastSuccess, toastWarning } from '../Global';
import Modal from 'react-native-modal'
import GlobalStyle from '../GlobalStyle';

const styles = StyleSheet.create({
    titleText: {
        fontSize: 17,
        color: '#2E2E2E',
        fontWeight: "bold"
    },
    contentText: {
        color: 'rgba(46, 46, 46, 0.9)'
    },
    inputSpace: {
        marginTop: 10,
        marginBottom: 10
    }
});

class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: 'acs-jo',
            password: 'password',
            isModalVisible: false
        }
    }
    _showModal = () => this.setState({ isModalVisible: true })
    _hideModal = () => this.setState({ isModalVisible: false })
    handleFormChange = (field, value) => {
        console.log(field +"="+ value)
        this.setState({
            field : value,
            status : ""
        })
    }
    handleInputChange = (field) => (value) => this.handleFormChange(field, value)
    handleLogin = () => {
        const {email, password} = this.state
        this.setState ({
            status: "fetching"
        })
        delay(500).then(() => {
            if (this.state.email && this.state.password){
                // if(isEmail(this.state.email)){
                //     this.setState ({
                //         email: "",
                //         status: ""
                //     })
                //     toastWarning("Incorrect email format!")
                // }else{
                user.attemptLogin(email, password).then(result => {

                    if(result == true){
                        toastSuccess("Login Success!")
                    }
                    else if (result === "connectionError"){
                        console.log("MASUK CONNECTION ERROR")
                        this.setState ({
                            status: "",
                            isModalVisible:true
                        })
                    }
                    else{
                        toastError("Incorrect email or password!")
                        this.setState ({
                            email: "",
                            password: "",
                            status: ""
                        })
                        Actions.refresh()
                    }
                })
                // }
            }else{
                toastError("You need to fill all the input!")
                this.setState ({
                    status: ""
                })
                return false
            }
        })
    }
    handleForgotPassword = () => {
        Actions.forgot()
    }
    render() {
        return(
        <KeyboardAvoidingView style={{flex:1, backgroundColor: "#c71101"}} keyboardVerticalOffset={-100}>
            <Content contentContainerStyle={{flex:1, justifyContent: "center"}}>
                <ScrollView keyboardShouldPersistTaps="always" keyboardDismissMode="on-drag">
                    <View style={{height: 120, flex:0.3, alignItems: "center", justifyContent: "center"}}>
                        <Image resizeMethod="resize" source={ require("../images/RODAMAS-logo-(edited).png") } style={{flex:1, width: "50%", height: "auto", resizeMode: "contain"}} />
                    </View>
                    <Form style={{padding: 40}}>
                        <Item floatingLabel last>
                            <Label style={{color: "#fff"}}>Email</Label>    
                            <Input style={{color: "#fff"}} value={this.state.email} onChangeText = {this.handleInputChange("email")}/>
                        </Item>
                        <Item floatingLabel last> 
                            <Label style={{color: "#fff"}}>Password</Label>
                            <Input style={{color: "#fff"}} value={this.state.password} secureTextEntry={true} onChangeText = {this.handleInputChange("password")}/>
                        </Item>
                        <Button onPress={this.handleLogin} block style={{marginTop: 20, backgroundColor: "#EEE"}}>
                        {this.state.status === "fetching" ? <Spinner color = "#333"/> : <Text style={{color: "#333"}}>Login</Text>}
                        </Button>
                        <Text onPress={this.handleForgotPassword} style={{marginTop: 10, color: "#fff", textAlign: "center", fontSize: 16, fontWeight: "bold"}}>Forgot password?</Text>
                    </Form>
                </ScrollView>
                <Modal isVisible={this.state.isModalVisible} onBackButtonPress={this._hideModal} onBackdropPress={this._hideModal} backdropOpacity={0.5}>
                    <View style={{ backgroundColor: "#fff", padding: 20, borderRadius: 10 }}>
                    <Text style={{ textAlign: "center", fontWeight: "bold", color: '#2E2E2E', marginBottom: 25}}>Connection is not available.</Text>
                    <View style={{flexDirection: "row", justifyContent: "center"}}>
                        <Button full onPress={this._hideModal} style={{ backgroundColor: "#2f3e69", flex: 0.5 }}>
                            <Text style={{color: "#fff", fontWeight: "bold", fontSize: 16}}>OK</Text>
                        </Button>
                    </View>
                    </View>
                </Modal>
            </Content>
        </KeyboardAvoidingView>
        );
    }
}

export default LoginScreen