import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Content, List, ListItem, Left, Body, Thumbnail, Button, Separator } from 'native-base';
import { Actions } from 'react-native-router-flux';
import GlobalStyle from '../../GlobalStyle';
import { APIRoot }  from '../../Const';
import ActivityIndicator from 'react-native-loading-spinner-overlay';
import PropTypes from 'prop-types';
import delay from '../../libraries/timeoutPromise';
import { toastWarning, toastError, toastSuccess } from '../../Global';
import Icon from 'react-native-vector-icons/FontAwesome';
import user from '../../models/User'

export default class DrawerContent extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: {}
        }
    }

    componentWillReceiveProps = () => {
        user.validateToken().then(result => {
            console.log('userdata : ' + result)
            result = JSON.parse(result)
            this.setState({
                data:result
            })
        })
    }

    handleDOList = () => {
        this.context.drawer.close()
        Actions.master()
    }

    handleHistory = () => {
        this.context.drawer.close()
        Actions.master()
    }

    handleLogout = () => {
        this.context.drawer.close()
        Actions.login()
    }

    render () {

        var content = null;
        if (this.state.data !== null) {
            content =  <Body style={{paddingLeft:10}}>
                            <Text style={{color: "#FFF"}}>{this.state.data.user_name}</Text>
                            <Text style={{color: "#FFF"}} note>WCS-DA</Text>
                        </Body>
        }

        return (
            <Container style={{backgroundColor: "#fff"}}>
                <Content>
                <List style={{backgroundColor: "#c71101"}}>
                    <ListItem style={{backgroundColor: "#c71101"}}>
                    {content}
                    </ListItem>
                </List>
                <List>
                <Separator bordered>
                    <Text>MENU</Text>
                </Separator>
                <ListItem icon onPress={this.handleDOList}> 
                    <Left style={{flex: 0.1}}>
                    <Icon name="tasks" style={{fontSize: 18}}/>
                    </Left>
                    <Body style={{flex: 0.9}}>
                    <Text>Task</Text>
                    </Body>
                </ListItem>
                <ListItem icon onPress={this.handleHistory}>  
                    <Left style={{flex: 0.1}}>
                    <Icon name="history" style={{fontSize: 18}}/>
                    </Left>
                    <Body style={{flex: 0.9}}>
                    <Text>History</Text>
                    </Body>
                </ListItem>
                <ListItem icon>  
                    <Left style={{flex: 0.1}}>
                    <Icon name="key" style={{fontSize: 18}}/>
                    </Left>
                    <Body style={{flex: 0.9}}>
                    <Text>Change Password</Text>
                    </Body>
                </ListItem>
                <ListItem icon onPress={this.handleLogout}> 
                    <Left style={{flex: 0.1}}>
                    <Icon name="power-off" style={{fontSize: 18}}/>
                    </Left>
                    <Body style={{flex: 0.9}}>
                    <Text>Sign Out</Text>
                    </Body>
                </ListItem>
                </List>
                </Content>
            </Container>
        )
    }
}

DrawerContent.contextTypes = {
    drawer: PropTypes.object
}