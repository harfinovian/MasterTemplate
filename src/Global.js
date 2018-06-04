import language from './models/Language'
import cacheSet from './libraries/cacheSet'
import cacheGet from './libraries/cacheGet'
import { Toast } from 'native-base'
import { Actions } from 'react-native-router-flux'
import user from './models/User'

export function languageGet() {

    return language.cacheAndRequest(({ data, updatedAt, isCache }) => {
        if (data !== null) {
            console.log(data)
        } else {
            cacheSet("language", "en")
            console.log("Belum ada cachedLang, masuk cacheSet")
        }
    }).then((response) => {
        const res = response == null ? { data : 'en' } : JSON.parse(response)
        console.log(res)
        console.log(res.data)
        return Promise.all([res.data])
    })
}

export function getTextStyle(status){
    if(status == "Low"){
        return {
            fontWeight: "bold", color:'#158B27', fontSize: 15
        }
    }
    if(status == "High"){
        return {
            fontWeight: "bold", color:'#AD2626', fontSize: 15
        }
    }
    if(status == "Medium"){
        return {
            fontWeight: "bold", color:'#BF7F24', fontSize: 15
        }
    }
    else{
        return {
            fontWeight: "bold", color:'rgba(46, 46, 46, 0.9)', fontSize: 15
        }
    } 
}

export function tokenGet(token) {

    return user.cacheAndRequestToken(({ data, updatedAt, isCache }) => {
        if (data !== null && data !== token) {
            console.log(data)
        } else if(token !== null) {
            cacheSet("firebase_notification", token)
            console.log("Belum ada cachedNotif, masuk cacheSet")
        } else{
            console.log("token kosong")
        }
    }).then((response) => {
        const res = response == null ? { data : token !== null ? token : null } : JSON.parse(response)
        console.log(res.data)
        return Promise.all([res.data])
    })
}

export function popIfExists() {
    console.log("back button")
    // if (navigator.getCurrentIndex() > 0) {
    //   navigator.pop()
    //   return true // do not exit app
    // } else {
    //   return false // exit app
    // }
}

export function toastWarning(msg) { 
    Toast.show({
        text: msg,
        duration: 2000,
        position: 'top',
        buttonText: 'OK',
        type: 'warning'
    })
}

export function toastSuccess(msg) { 
    Toast.show({
        text: msg,
        duration: 2000,
        position: 'top',
        buttonText: 'OK',
        type: 'success'
    })
}

export function toastError(msg) { 
    Toast.show({
        text: msg,
        duration: 2000,
        position: 'top',
        buttonText: 'OK',
        type: 'danger'
    })
}