import { AsyncStorage } from 'react-native'
import user from '../models/User'
export default (update, APISource, onError = () => {}) => {

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
            }else if(statusCode == 404){
                update({
                    data: result,
                    updatedAt: new Date(),
                    isCache: false })
            }else{
                onError()
            }
        })
        .catch(onError)
    })
}