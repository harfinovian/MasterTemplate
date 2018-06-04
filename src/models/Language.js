import { APIRoot } from '../Const'
import cacheGet from '../libraries/cacheGet'

export default {
    /**
     * Request a list of all products data. 
     */
    cacheAndRequest: (onUpdate, onError = () => {}) => {
        return cacheGet(onUpdate, 'language')
    }
}