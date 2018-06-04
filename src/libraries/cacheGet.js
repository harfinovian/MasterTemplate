import { AsyncStorage } from 'react-native'
import user from '../models/User'
export default (update, storageId, onError = () => {}) => {
    
    // If the data cache is available, update with the cached data first
    return AsyncStorage.getItem(storageId, (error, result) => {
        if (result) {
            result = JSON.parse(result)
            console.log(result.data)
            update({
                data: result.data,
                updatedAt: result.updatedAt,
                isCache: true
            })
        }
    })
}