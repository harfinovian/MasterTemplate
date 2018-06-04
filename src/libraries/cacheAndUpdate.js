import { AsyncStorage } from 'react-native'
import user from '../models/User'

export default (update, req, APISource, onError = () => {}) => {
    
    user.validateToken().then((result) => {
        res = JSON.parse(result)
        let statusCode;

        url = ''
        res !== null ? url = "customer_id/" + res.customer_id : null
        fetch(APISource + url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Api-Key': res !== null ? res.token : ''
            },
            body: JSON.stringify({
                data : req
            })
        })
        .then(response => {
            const statusCode = response.status;
            const res = response.json();
            return Promise.all([statusCode, res])
        }).then(([statusCode, result]) => {
            
            console.log(result)
            if(statusCode == 200 && result !== null){
                update({
                    data: result,
                    updatedAt: new Date(),
                    isCache: false })
                    
                AsyncStorage.setItem(storageId, JSON.stringify({
                    data: result,
                    updatedAt: new Date()
                }))
            }else{
                onError()
            }  
        })
        .catch(onError)
        
    })

}