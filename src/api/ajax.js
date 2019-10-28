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
        const result = response.data
        if(result.status===0){
            return result.data || {} //避免取值时undefined报错
        }else{
            return Promise.reject(result.msg || '操作失败，未知原因')
        }
    },
    error => {
    console.log('response iterceptor onRejected()')
    //throw error
    return Promise .reject(error)
    }
)

export default instance 