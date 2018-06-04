import React, { Component } from 'react';
import {
    Platform,
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image
  } from 'react-native';
import { Container } from 'native-base';
import {MediaQuery} from "react-native-responsive-ui";
import HeaderMenuComponent from '../components/header/HeaderMenuComponent.js';
import HeaderComponent from '../components/header/HeaderComponent.js';
import PortraitMasterDetailComponent from '../components/masterdetail/PortraitMasterDetailComponent.js';
import LandscapeMasterDetailComponent from '../components/masterdetail/LandscapeMasterDetailComponent.js';
import PurchaseRequest from '../models/PurchaseRequest';

export default class PRMasterDetailScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: undefined,
            dataPRdetail: undefined,
            dataPRList: [],
            isCache: false
        }
    }

    componentDidMount = () => {
        PurchaseRequest.cacheAndRequestDetail(this.props.id,({ data, updatedAt, isCache }) => {
            this.setState({
                dataPRdetail: data,
                isCache
            })
        })
        if (this.props.screenType === "master"){
            PurchaseRequest.cacheAndRequestAll(({ data, updatedAt, isCache }) => {
                this.setState({
                    dataPRList: data,
                    isCache
                })
            })
        }
        else {
            PurchaseRequest.cacheAndRequestHistory(({ data, updatedAt, isCache }) => {
                this.setState({
                    dataPRList: data,
                    isCache
                })
            })
        }
    }

    onRefresh = () =>{
        if (this.props.screenType === "master"){
            PurchaseRequest.cacheAndRequestAll(({ data, updatedAt, isCache }) => {
                this.setState({
                    dataPRList: data,
                    isCache
                })
            })
        }
        else {
            PurchaseRequest.cacheAndRequestHistory(({ data, updatedAt, isCache }) => {
                this.setState({
                    dataPRList: data,
                    isCache
                })
            })
        }
    }

    render() {
        var portraitContent, landscapeContent = null;
        if (this.props !== null) {
            portraitContent = <PortraitMasterDetailComponent
                itemsFromDetailAPI={this.state.dataPRdetail}
                itemsFromTaskAPI={this.props}
                id={this.props.id}
                status={this.props.status}
                screenType={this.props.screenType}
            />;
            landscapeContent = <LandscapeMasterDetailComponent
                itemsFromDetailAPI={this.state.dataPRdetail}
                itemsFromTaskAPI={this.props}
                PRitems={this.state.dataPRList}
                id={this.props.id}
                status={this.props.status}
                screenType={this.props.screenType}
            />;
        }
        return (
            <Container>
                <MediaQuery orientation="portrait">
                    <HeaderComponent/>
                </MediaQuery>
                <MediaQuery orientation="landscape">
                    <HeaderMenuComponent/>
                </MediaQuery>
                <MediaQuery orientation="portrait">
                    { portraitContent }
                </MediaQuery>
                <MediaQuery orientation="landscape">
                    { this.state.dataPRdetail && this.state.dataPRList ? landscapeContent : null }
                </MediaQuery>
            </Container>
        );
    }
  }
