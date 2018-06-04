import { AsyncStorage } from 'react-native'
import user from '../models/User'
import { toastWarning } from '../Global'
export default (update, storageId, APISource, onError = () => {}) => {
    
    // If the data cache is available, update with the cached data first
    AsyncStorage.getItem(storageId, (error, result) => {
        if (result) {
            result = JSON.parse(result)
            update({
                data: result.data,
                updatedAt: result.updatedAt,
                isCache: true
            })
        }
    })

    window.models.user.validateToken().then(result => {
        res = JSON.parse(result)

        console.log(res)
        url = ''
        res !== null ? url = "customer_id/" + res.customer_id : null
        // Request the latest data from the server, if successful, update the view and update the cache
        return fetch(APISource + url, {
            method: 'GET', 
            headers: {
                'X-Api-Key': res !== null ? res.token : ''
            }
        })
        .then((response) => {
            const statusCode = response.status;
            const res = response.status > 200 ? [] : response.json()
            return Promise.all([statusCode, res])
        })
        .then(([statusCode, result]) => {
            console.log(result)
            if(statusCode == 200){
                update({
                    data: result,
                    updatedAt: new Date(),
                    isCache: false })
                    
                AsyncStorage.setItem(storageId, JSON.stringify({
                    data: result,
                    updatedAt: new Date()
                }))
            }else if(statusCode == 404){
                update({
                    data: result,
                    updatedAt: new Date(),
                    isCache: false })
                    
                AsyncStorage.setItem(storageId, JSON.stringify({
                    data: result,
                    updatedAt: new Date()
                }))
            }else if(statusCode == 403){
                window.models.user.logoutUser().then(result => {
                    if(!result){
                        toastWarning("You has been logged out! Another user login in another device!")
                    }
                })
            }else{
                onError()
            }
        })
        .catch(onError)
    })
}