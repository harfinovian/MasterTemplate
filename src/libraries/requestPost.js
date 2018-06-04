
export default (update, formdata, storageId, APISource, onError = () => {}) => {

    // window.models.user.validateToken().then(result => {
    //     res = JSON.parse(result)

    //     url = ''
    //     res !== null ? url = res.customer_id : null

        fetch(APISource + url , {
            method: 'POST',
            headers: {
                'Accept': 'multipart/form-data',
                'Content-Type': 'multipart/form-data',
                // 'X-Api-Key': res !== null ? res.token : ''
            },
            body: formdata
        })
        .then(response => {
            console.log(statusCode +" = "+ res)
            const statusCode = response.status;
            const res = response.json();
            return Promise.all([statusCode, res])
        })
        .then(([statusCode, result]) => {
        
            if (statusCode === 200){
                
                if(storageId !== null){
                    AsyncStorage.setItem(storageId, JSON.stringify({
                        data: result,
                        updatedAt: new Date()
                    }))
                    update({
                        data: result,
                        updatedAt: new Date(),
                        isCache: true })
                }else{
                    update({
                        data: result,
                        updatedAt: new Date(),
                        isCache: false })
                }

            }
        })
        .catch((error)=>{
            console.log(error.message)
        })
    // })
}