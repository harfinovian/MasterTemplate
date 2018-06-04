import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Content, Form, Toast, Icon, Label, Item, Input, Button } from 'native-base';
import GlobalStyle from '../GlobalStyle';
import Modal from 'react-native-modal'
import { APIRoot }  from '../Const';
import { lang } from '../libraries/lang'
import { languageGet, toastWarning, toastSuccess, toastError } from '../Global'
import ActivityIndicator from 'react-native-loading-spinner-overlay';
import delay from '../libraries/timeoutPromise'

class ForgotPasswordScreen extends Component {

    constructor(props){
        super(props);
        this.state = 
        {
            email: '',
            isModalVisible: false,
            language:'en',
            visible: false
        }
    }

    componentDidMount(){
        languageGet().then((result) => {
            console.log(result)
            this.setState({
                language : result.toString()  
            })
        })

    }

    handleLogin = () => {
        Actions.login()
    }

    _showModal = () => this.setState({ isModalVisible: true })
    _hideModal = () => this.setState({ isModalVisible: false })

    forgotPasswordHandle = () => {
        //FORM VALIDATION
        if (this.state.email == '') toastWarning("You need to fill all the input!")
        else{
            this.setState({ visible: true })
            let statusCode;
            const formdata = new FormData();
            formdata.append('email', this.state.email);

            // fetch(APIRoot+'forget_password', {
            //     method: 'POST',
            //     headers: {
            //     'Accept': 'multipart/form-data',
            //     'Content-Type': 'multipart/form-data'
            //     },
            //     body: formdata
            // })
            // .then(response => {
            //     statusCode = response.status;
            //     Promise.all(statusCode);
            //     delay(2000)
            //     this.setState({
            //         visible: false
            //     })
            //     if (statusCode === 200){
            //         this.setState({
            //             email: ''
            //         })
            //         toastSuccess(lang.forgotPasswordScreen.toastWeHaveSendYouAResetPassword[this.state.language])
            //     }
            //     else if (statusCode === 400){
            //         this.setState({
            //             email: ''
            //         })
            //         toastError(lang.forgotPasswordScreen.toastTheEmailThatYouSubmit[this.state.language])
            //     }
            //     else{
            //         toastError(lang.forgotPasswordScreen.toastErrorWhenSubmiting[this.state.language])
            //     }
            // })
            // .catch((error)=>{
            //     console.log(error.message);
            //     this.setState ({
            //         isModalVisible:true,
            //         visible: false
            //     })
            // });    
        }
    }



    render() {

        let t = lang.forgotPasswordScreen
        let opt = this.state.language

        return(
        <KeyboardAvoidingView style={{flex:1, backgroundColor: "#c71101"}} keyboardVerticalOffset={-100}>
            <ActivityIndicator size={"large"} overlayColor={"rgba(0, 0, 0, 0.5)"} animation={"fade"} visible={this.state.visible} textContent={"Processing..."} textStyle={{color: '#FFF'}} />
            <ScrollView>
                <Content contentContainerStyle={{ flex:1, justifyContent: "center"}}>       
                    <View style={{ height: 100, flex: 0.3, alignItems: "center", justifyContent: "center"}}>
                        <Image resizeMethod="resize" source={ require("../images/RODAMAS-logo-(edited).png") } style={{ flex:1, width: "50%", height: "auto", resizeMode: "contain"}} />
                    </View>
                    <Form style={{paddingTop: 40, paddingLeft: 40, paddingRight: 40}}>
                        <Item floatingLabel last> 
                            <Label style={{color: "#fff"}}>{t.email[opt]}</Label>
                            <Input style={{color: "#fff"}} value={this.state.email} onChangeText={(text) => this.setState({email:text})}/>
                        </Item>
                        <Button block style={{marginTop: 20, backgroundColor: "#EEE"}} onPress={this.forgotPasswordHandle}>
                            <Text style={{color: "#333"}}>{t.submit[opt]}</Text>
                        </Button>

                        <Text style={{marginTop: 40, color: "#fff", textAlign: "center", fontSize: 16, fontWeight: "bold"}} onPress={this.handleLogin}><Icon style={[GlobalStyle.whiteColor, {fontSize: 16}]} name="arrow-back" /> {t.backToLoginPage[opt]}</Text>
                    </Form>
                    <Modal isVisible={this.state.isModalVisible} onBackButtonPress={this._hideModal} onBackdropPress={this._hideModal} backdropOpacity={0.5}>
                        <View style={{ backgroundColor: "#fff", padding: 20, borderRadius: 10 }}>
                        <Text style={{ textAlign: "center", fontWeight: "bold", color: '#2E2E2E', marginBottom: 25}}>{t.modalConnection[opt]}</Text>
                        <View style={{flexDirection: "row", justifyContent: "center"}}>
                            <Button full onPress={this._hideModal} style={{ backgroundColor: "#2f3e69", flex: 0.5 }}>
                                <Text style={{color: "#fff", fontWeight: "bold", fontSize: 16}}>OK</Text>
                            </Button>
                        </View>
                        </View>
                    </Modal>
                </Content>
            </ScrollView>
        </KeyboardAvoidingView>
         );
    }
}

export default ForgotPasswordScreen