import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import GlobalStyle from '../../GlobalStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNFetchBlob from 'react-native-fetch-blob';
import { Button, Container } from 'native-base';

export default class PRTabAttachment extends Component {

    handleDownload = (downloadPath) => {
        RNFetchBlob
        .config({
            // add this option that makes response data to be stored as a file, 
            // this is much more performant. 
            fileCache : true,
            addAndroidDownloads : {
                // Show notification when response data transmitted 
                notification : true,
                // Title of download notification 
                title : 'Downloading attachment file...',
                // File description (not notification description) 
                description : 'Approval Apps file attachment.',
                // Make the file scannable by media scanner 
                mediaScannable : true
            }
        })
        .fetch('GET', downloadPath, {
            //some headers .. 
            description: "Downloading..."
        })
        .then((res) => {
            // the temp file path 
            console.log('The file has been saved to ', res.path())
        })
    }
    
    render () {
        return (
            <ScrollView>
            <View style={{padding: 10, paddingTop: 50}}>
                <View style={{justifyContent: "center", alignItems: 'center'}}>
                        <Icon name="file" style={{fontSize: 100, color: "#3b3b3b", marginBottom: 20}}/>
                        <Text style={GlobalStyle.contentText}>1289218301.txt</Text>
                    
                        <View style={{flexDirection: "row", justifyContent: 'space-between', marginTop: 20}}>    
                            <Button onPress={()=> this.handleDownload()} full style={{backgroundColor: "#c71101", flex: 0.5}}>
                                <Text style={{color: "#fff", fontWeight: "bold", fontSize: 14}}><Icon name="download" style={{fontSize: 16, color: "#fff"}}/> Download File</Text>
                            </Button>
                        </View>
                </View>
            </View>
            </ScrollView>
        )
    }
}