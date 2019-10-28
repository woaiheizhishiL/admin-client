import axios from 'axios'

const instance = axios.create({
    timeout:10000
})

instance.interceptors.request.use(( config => {
    console.log('request iterceptor onResolved()')
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