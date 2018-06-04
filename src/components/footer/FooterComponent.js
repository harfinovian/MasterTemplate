import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Footer, FooterTab, Item, Input } from 'native-base';
import GlobalStyle from '../../GlobalStyle';
import Modal from 'react-native-modal';
import { APIRoot }  from '../../Const';
import { toastWarning, toastError, toastSuccess } from '../../Global';
import ActivityIndicator from 'react-native-loading-spinner-overlay';
import delay from '../../libraries/timeoutPromise';

export default class PRFooterComponent extends Component {

    constructor(props){
        super(props);
        this.state = 
        {
            isModalVisible: false,
            modalStart: false,
            modalCancel: false,
            modal_notes: ""
        }
    }

    _showModal = () => this.setState({ isModalVisible: true })
    
    _hideModal = () => this.setState({ 
        isModalVisible: false, 
        modalConnectionError: false,
        modalStart: false,
        modalCancel: false,
        modal_notes: ""
    })

    handleModalStart = () => this.setState({
        modalStart: true,
        modal_notes: "",
        isModalVisible: true
    })

    handleModalCancel = () => this.setState({
        modalCancel: true,
        modal_notes: "",
        isModalVisible: true
    })

    handleApprove = () => {
        this.setState({ isModalVisible: false })
        if (this.state.modal_notes === ""){
            toastWarning("You need to input PR notes!")
        }
        else {
            this.setState({ visible: true, isModalVisible: false })
            let statusCode;
            toastSuccess("Your PR has been approved successfully!")
            delay(1500).then(() => Actions.master())

            // const formdata = new FormData();
            // formdata.append('user_id', 2);
            // formdata.append('pr_id', this.props.id);
            // formdata.append('pr_release_status', 2);
            // formdata.append('pr_approval_note', this.state.modal_notes);

            // fetch(APIRoot+'purchase_request/approve', {
            //     method: 'POST',
            //     headers: {
            //         'Accept': 'multipart/form-data',
            //         'Content-Type': 'multipart/form-data'
            //     },
            //     body: formdata
            // })
            // .then(response => {
            //     const statusCode = response.status;
            //     const res = response.json();
            //     return Promise.all([statusCode, res])
            // })
            // .then(([statusCode, result]) => {
            //     delay(2000)
            //     this.setState({
            //         visible: false,
            //         modal_notes: ""
            //     })
            //     if (statusCode === 200){
            //         toastSuccess("Your PR has been approved successfully!")
            //         delay(1500).then(() => Actions.master())
            //     }
            //     else{
            //         toastError("There was an error when submitting your request!")
            //     }
            // })
            // .catch((error)=>{
            //     console.log(error.message);
            //     this.setState ({
            //         modalConnectionError: true,
            //         isModalVisible:true,
            //         visible: false
            //     })
            // })
        }
    }

    handleReject = () => {
        this.setState({ isModalVisible: false })
        if (this.state.modal_notes === ""){
            toastWarning("You need to input PR notes!")
        }
        else {
            this.setState({ visible: true, isModalVisible: false })
            toastSuccess("Your PR has been rejected successfully!")
            delay(1500).then(() => Actions.master())
            // let statusCode;

            // const formdata = new FormData();
            // formdata.append('user_id', 2);
            // formdata.append('pr_id', this.props.id);
            // formdata.append('pr_release_status', 1);
            // formdata.append('pr_approval_note', this.state.modal_notes);

            // fetch(APIRoot+'purchase_request/approve', {
            //     method: 'POST',
            //     headers: {
            //         'Accept': 'multipart/form-data',
            //         'Content-Type': 'multipart/form-data'
            //     },
            //     body: formdata
            // })
            // .then(response => {
            //     const statusCode = response.status;
            //     const res = response.json();
            //     return Promise.all([statusCode, res])
            // })
            // .then(([statusCode, result]) => {
            //     delay(2000)
            //     this.setState({
            //         visible: false,
            //         modal_notes: ""
            //     })
            //     if (statusCode === 200){
            //         toastSuccess("Your PR has been rejected successfully!")
            //         delay(1500).then(() => Actions.master())
            //     }
            //     else{
            //         toastError("There was an error when submitting your request!")
            //     }
            // })
            // .catch((error)=>{
            //     console.log(error.message);
            //     this.setState ({
            //         modalConnectionError: true,
            //         isModalVisible:true,
            //         visible: false
            //     })
            // })
        } 
    }

    render () {
        console.log(this.props.id)
        var modalContent;
        
        if (this.state.modalStart === true) {
            modalContent =  <View>
                                <Text style={GlobalStyle.modalTitle}>Are you sure you want to approve this PR?</Text>
                                <Item regular style={{marginBottom: 15}}>
                                    <Input placeholder='Notes about this PR...' value={this.state.modal_notes} onChangeText={modal_notes => this.setState({ modal_notes })} />
                                </Item>
                                <View style={{flexDirection: "row", justifyContent: "center"}}>
                                    <Button full onPress={() => this.handleApprove()} style={GlobalStyle.yesButton}>
                                        <Text style={GlobalStyle.buttonText}>Yes</Text>
                                    </Button>
                                    <Button full onPress={this._hideModal} style={GlobalStyle.noButton}>
                                        <Text style={GlobalStyle.buttonText}>No</Text>
                                    </Button>
                                </View>
                            </View>;
        }
        else if (this.state.modalCancel === true) {
            modalContent =  <View>
                                <Text style={GlobalStyle.modalTitle}>Are you sure you want to reject this PR?</Text>
                                <Item regular style={{marginBottom: 15}}>
                                    <Input placeholder='Notes about this PR...' value={this.state.modal_notes} onChangeText={modal_notes => this.setState({ modal_notes })} />
                                </Item>
                                <View style={{flexDirection: "row", justifyContent: "center"}}>
                                    <Button full onPress={() => this.handleReject()} style={GlobalStyle.yesButton}>
                                        <Text style={GlobalStyle.buttonText}>Yes</Text>
                                    </Button>
                                    <Button full onPress={this._hideModal} style={GlobalStyle.noButton}>
                                        <Text style={GlobalStyle.buttonText}>No</Text>
                                    </Button>
                                </View>
                            </View>;
        }

        return (
            <View>
                <ActivityIndicator size={"large"} overlayColor={"rgba(0, 0, 0, 0.5)"} animation={"fade"} visible={this.state.visible} textContent={"Processing..."} textStyle={{color: '#FFF'}} />
                <Footer style={{borderTopWidth: 0, backgroundColor: "rgba(62, 62, 62, 1)"}}>
                    <FooterTab style={GlobalStyle.footerTab}>
                        <Button style={[GlobalStyle.approveButton, {marginRight: 20}]} small onPress={this.handleModalStart}>
                            <Text style={GlobalStyle.approveButtonText}><Icon style={{fontSize: 15}} name="check"/> APPROVE</Text>
                        </Button>
                        <Button style={GlobalStyle.notSentButton} small onPress={this.handleModalCancel}>
                            <Text style={GlobalStyle.notSentButtonText}><Icon style={{fontSize: 15}} name="close"/> REJECT</Text>
                        </Button>
                    </FooterTab>
                </Footer>
                <Modal supportedOrientations={['portrait', 'landscape']} avoidKeyboard={Platform.OS === "ios" ? true : false} isVisible={this.state.isModalVisible} onBackButtonPress={this._hideModal} onBackdropPress={this._hideModal} backdropOpacity={0.5}>
                    <View style={GlobalStyle.modalStyle}>
                        {modalContent}
                    </View>
                </Modal>
            </View>
        )
    }
}
