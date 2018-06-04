import React, { Component } from 'react';
import {
    Platform,
    Text,
    View,
    StyleSheet,
    ScrollView,
    RefreshControl
  } from 'react-native';
import { Container, Content } from 'native-base';
import {MediaQuery} from "react-native-responsive-ui";
import HeaderMenuComponent from '../components/header/HeaderFilterComponent';
import PortraitMasterComponent from '../components/master/PortraitMasterComponent.js';
import LandscapeMasterComponent from '../components/master/LandscapeMasterComponent';
import PurchaseRequest from '../models/PurchaseRequest';

export default class MasterScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
          dataPR: [],
          isCache: false
        }
      }

    componentDidMount = () =>{
        PurchaseRequest.cacheAndRequestAll(({ data, updatedAt, isCache }) => {
            this.setState({
                dataPR: data,
                isCache : false
            })
        })
    }

    onRefresh = () =>{
        PurchaseRequest.cacheAndRequestAll(({ data, updatedAt, isCache }) => {
            this.setState({
                dataPR: data,
                isCache : false
            })
        })
    }

    render() {

        var portraitContent, landscapeContent = null;

        if (this.props.id !== null) {
            portraitContent = <PortraitMasterComponent
                PRitems={this.state.dataPR}
            />;
            landscapeContent = <LandscapeMasterComponent
                PRitems={this.state.dataPR}
            />;
        }
        else if (this.state.dataPO && this.state.dataPR !== null) {
            portraitContent = <PortraitMasterComponent
                PRitems={this.state.dataPR}
            />;
            landscapeContent = <LandscapeMasterComponent
                PRitems={this.state.dataPR}
            />;
        }

        return (
            <Container>
                <HeaderMenuComponent/>
                <MediaQuery orientation="portrait">
                    <Content refreshControl={
                        <RefreshControl
                            refreshing={this.state.isCache}
                            onRefresh={this.onRefresh}
                            title="Refreshing.."
                        />
                        }>
                        {portraitContent}
                    </Content>
                </MediaQuery>
                <MediaQuery orientation="landscape">
                    {landscapeContent}
                </MediaQuery>
            </Container>
        );
    }
  }
