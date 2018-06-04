import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import NavigationDrawer from './NavigationDrawer'

// screens identified by the router
import LoginScreen from '../containers/LoginScreen'
import ForgotScreen from '../containers/ForgotPasswordScreen'
import SearchScreen from '../containers/SearchScreen'
import MasterScreen from '../containers/MasterScreen'
import PRMasterDetailScreen from '../containers/MasterDetailScreen'
import SplashScreen from '../containers/SplashScreen'

class NavigationRouter extends Component {
    render () {
        return (
            <Router>
                <Scene key='drawer' component={NavigationDrawer} open={false}>
                    <Scene key='master' component={MasterScreen} hideNavBar={true}/>
                    <Scene key='masterDetail' component={PRMasterDetailScreen} hideNavBar={true}/>
                    <Scene key='login' component={LoginScreen} hideNavBar={true}/>
                    <Scene key='forgot' component={ForgotScreen} hideNavBar={true}/>
                    <Scene initial key='splash' component={SplashScreen} hideNavBar={true}/>
                    <Scene key='search' component={SearchScreen} hideNavBar={true}/>
                </Scene>
            </Router>
        )
    }
}

export default NavigationRouter
