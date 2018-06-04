import { APIRoot }  from '../Const'
import cacheAndRequest from '../libraries/cacheAndRequestNoAuth.js'

export default {
    /**
     * Get all purchase request
     */
    cacheAndRequestAll: (onUpdate, onError = () => {}) => {
        cacheAndRequest(onUpdate, 'purchase_request', APIRoot + "purchase_request/task/")
    },
    /**
     * Get all purchase request history
     */
    cacheAndRequestHistory: (onUpdate, onError = () => {}) => {
        cacheAndRequest(onUpdate, 'purchase_request_history', APIRoot + "purchase_request/history/")
    },
    /**
     * Get purchase request detail based on ID
     */
    cacheAndRequestDetail: (id, onUpdate, onError = () => {}) => {
        cacheAndRequest(onUpdate, "purchase_request_detail" + id, APIRoot + 'purchase_request/detail/pr_id/' + id +'/')
    }
}