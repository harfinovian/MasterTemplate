import { AsyncStorage } from 'react-native'
import { APIRoot }  from '../Const'
import { Actions } from 'react-native-router-flux'
import cacheGet from '../libraries/cacheGet'
import requestPost from '../libraries/requestPost'

export default {
    username: undefined,
    email: undefined,
    user_id: undefined,
    isAuth: false,
    token: undefined,
    attemptLogin : (username, password) => new Promise(resolve => { 
    
        let statusCode;
        let formdata = new FormData();
        formdata.append('user_login_name', username)
        formdata.append('password', password)

        console.log(formdata)

        fetch(APIRoot+'auth/login', {
            method: 'POST',
            headers: {
            'Accept': 'multipart/form-data',
            'Content-Type': 'multipart/form-data'
            },
            body: formdata
        })
        .then(response => {
            console.log(response)
            const statusCode = response.status;
            const res = response.json();
            return Promise.all([statusCode, res])
        })
        .then(([statusCode, result]) => {
        
            if (statusCode === 200){
                // If login successful
                const key = result.token

                // Save the key to the local storage
                AsyncStorage.setItem("usertoken" , JSON.stringify({
                   token: result.token,
                   user_id: result.user_id,
                   user_name: result.user_name
                }), () => {
                    this.email = username
                    this.username = result.user_name
                    this.token = result.token
                    this.user_id = result.user_id
                    this.isAuth = true
                    resolve(true)
                })
                Actions.master()
            }else{
                resolve(false)
            }       
        })
        .catch((error)=>{
            console.log(error.message);
            resolve("connectionError")
        });

    }),
    validateToken: () => new Promise(resolve => {
        // Check if a token exists in the local storage
        AsyncStorage.getItem("usertoken", (error, result) => {
            if (!result) {
                resolve(null)
            }
            else {
                resolve(result)
            }
        })
    }),
    logoutUser : () => new Promise(resolve => { 
        // Save the key to the local storage
        AsyncStorage.getAllKeys( (error, keys) => {
            console.log(keys)
            AsyncStorage.multiRemove(keys, error => {
                resolve(error)
            })
        })

    }),
    cacheAndRequestToken: (onUpdate, onError = () => {}) => {
        return cacheGet(onUpdate, 'firebase_notification')
    }

}