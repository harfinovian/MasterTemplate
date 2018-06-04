import { AsyncStorage } from 'react-native'

export default (storageId, req, onError = () => {}) => {
    
    // // If the data cache is available, update with the cached data first
    if(req !== 0){
        console.log(req)
        AsyncStorage.setItem(storageId, JSON.stringify({
            data: req,
            updatedAt: new Date()
        }))
    }
}