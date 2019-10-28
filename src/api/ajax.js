import axios from 'axios'
//import { object } from 'prop-types'//啥时候删的？？？
import qs from 'qs'

const instance = axios.create({
    timeout:10000
})

instance.interceptors.request.use(( config => {
    console.log('request iterceptor onResolved()')
    
    const {data}=config
    if (data instanceof Object){
        config.data = qs.stringify(data) 
    }

    return config
}))

instance.interceptors.response.use(
    response => {
        console.log('response interceptor onResolved()')
        return response
    },
    error => {
    console.log('response iterceptor onRejected()')
    //throw error
    return Promise .reject(error)
    }
)

export default instance 