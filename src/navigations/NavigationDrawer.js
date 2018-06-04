import React, { Component } from 'react'
import { Drawer } from 'native-base'
import { DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux'
import DrawerContent from '../components/drawer/DrawerContent'

class NavigationDrawer extends Component {
    
    render () {

        const state = this.props.navigationState
        const children = state.children
        
        return (
            <Drawer
                ref="navigation"
                open={state.open}
                onOpen={() => NavigationActions.refresh({ key: state.key, open: true })}
                onClose={() => NavigationActions.refresh({ key: state.key, open: false })}
                content={<DrawerContent />}
                tapToClose
            >
                <DefaultRenderer navigationState={children[state.index]} onNavigate={this.props.onNavigate} />
            </Drawer>
        )
    }
}

export default NavigationDrawer