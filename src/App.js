/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  BackAndroid,
  Alert,
  Platform
} from 'react-native';
import RootContainer from './containers/RootContainer'
import { Root, Toast } from 'native-base';
import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from 'react-native-fcm';
import cacheSet from './libraries/cacheSet';
import user from './models/User'
import { tokenGet } from './Global';
import {APIRoot} from './Const'

// firebase.initializeApp({
//   project_number: "841661362741",
//   databaseURL: "https://testdunlop-fac05.firebaseio.com",
//   storageBucket: "testdunlop-fac05.appspot.com",
//   databaseURL: "https://projName-d0c3e.firebaseio.com"
// });

FCM.on(FCMEvent.Notification, async (notif) => {
  if(notif.local_notification){
  }
  if(notif.opened_from_tray){
  }

  if(Platform.OS ==='ios'){

    switch(notif._notificationType){
      case NotificationType.Remote:
        notif.finish(RemoteNotificationResult.NewData)
        break;
      case NotificationType.NotificationResponse:
        notif.finish();
        break;
      case NotificationType.WillPresent:
        notif.finish(WillPresentNotificationResult.All) 
        break;
    }
  }
});

FCM.on(FCMEvent.RefreshToken, (token) => {
  console.log(token)
});

export default class App extends Component {

  constructor(props){
      super(props)
  }

  componentWillMount(){
    FCM.requestPermissions().then(()=>console.log('granted')).catch(()=>console.log('notification permission rejected'));
    FCM.getFCMToken().then(token => {
        console.log(token)
        // store fcm token in your server

        // tokenGet(token).then((result) => {
        //   console.log(result)

        //   var statusCode; 
        //   const formdata = new FormData();
        //   formdata.append('token', token);

        //   fetch(APIRoot + 'firebase_token', {
        //     method: 'POST',
        //     headers: {
        //     'Accept': 'multipart/form-data',
        //     'Content-Type': 'multipart/form-data'
        //     },
        //     body: formdata
        //   })
        //   .then(response => {
        //       statusCode = response.status;
        //       Promise.all(statusCode);
          
        //       if (statusCode === 200){
        //         cacheSet("firebase_notification", token)
        //           // toastSuccess("Success get token")
        //       }
        //       else if (statusCode === 400){
        //           // toastError("Failed get token")
        //       }
        //       else{
        //           // toastError("Something wrong to get token")
        //       }
        //   })
        //   .catch((error)=>{
        //       console.log(error.message);
        //   });
      //  })
    });
        
    this.notificationListener = FCM.on(FCMEvent.Notification, async (notif) => {
        // optional, do some component related stuff
    });
    
    FCM.getInitialNotification().then(notif => {
        console.log(notif)
    });
  }

  componentWillUnmount() {
    // stop listening for events
    this.notificationListener.remove();
  }

  otherMethods(){

    FCM.subscribeToTopic('/topics/promotions');
    FCM.unsubscribeFromTopic('/topics/promotions');
    FCM.presentLocalNotification({
        id: "UNIQ_ID_STRING",                               // (optional for instant notification)
        title: "My Notification Title",                     // as FCM payload
        body: "My Notification Message",                    // as FCM payload (required)
        sound: "default",                                   // as FCM payload
        priority: "high",                                   // as FCM payload
        click_action: "ACTION",                             // as FCM payload
        badge: 10,                                          // as FCM payload IOS only, set 0 to clear badges
        number: 10,                                         // Android only
        ticker: "My Notification Ticker",                   // Android only
        auto_cancel: true,                                  // Android only (default true)
        large_icon: "ic_launcher",                           // Android only
        icon: "ic_launcher",                                // as FCM payload, you can relace this with custom icon you put in mipmap
        big_text: "Show when notification is expanded",     // Android only
        sub_text: "This is a subText",                      // Android only
        color: "red",                                       // Android only
        vibrate: 300,                                       // Android only default: 300, no vibration if you pass 0
        group: "group",                                     // Android only
        picture: "https://google.png",                      // Android only bigPicture style
        ongoing: true,                                      // Android only
        my_custom_data:'my_custom_field_value',             // extra data you want to throw
        lights: true,                                       // Android only, LED blinking (default false)
        // show_in_foreground                                  // notification when app is in foreground (local & remote)
    });

    FCM.scheduleLocalNotification({
        fire_date: new Date().getTime(),      //RN's converter is used, accept epoch time and whatever that converter supports
        id: "UNIQ_ID_STRING",    //REQUIRED! this is what you use to lookup and delete notification. In android notification with same ID will override each other
        body: "from future past",
        repeat_interval: "week" //day, hour
    })

    FCM.getScheduledLocalNotifications().then(notif=>console.log(notif));

    //these clears notification from notification center/tray
    FCM.removeAllDeliveredNotifications()
    FCM.removeDeliveredNotification("UNIQ_ID_STRING")

    //these removes future local notifications
    FCM.cancelAllLocalNotifications()
    FCM.cancelLocalNotification("UNIQ_ID_STRING")

    FCM.setBadgeNumber(1);                                       // iOS and supporting android.
    FCM.getBadgeNumber().then(number=>console.log(number));     // iOS and supporting android.
    FCM.send('984XXXXXXXXX', {
      my_custom_data_1: 'my_custom_field_value_1',
      my_custom_data_2: 'my_custom_field_value_2'
    });

    FCM.deleteInstanceId()
        .then( () => {
          //Deleted instance id successfully
          //This will reset Instance ID and revokes all tokens.
        })
        .catch(error => {
          //Error while deleting instance id
        });
  }

render() {
    return (
      <Root>
        <View style={{ flex: 1 }}>
          <RootContainer />
        </View>
      </Root>
    );
  }
}
