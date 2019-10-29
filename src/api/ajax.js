import axios from 'axios'
//import { object } from 'prop-types'//啥时候删的？？？
import qs from 'qs'
import {message} from 'antd'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'
import store from '../redux/store'
import {removeUserToken} from '../redux/action-creators/user'
import history from '../history'


const instance = axios.create({
    timeout:10000
})

instance.interceptors.request.use(( config => {
    console.log('request iterceptor onResolved()')
    NProgress.start()//添加请求进度

    const {data}=config
    if (data instanceof Object){
        config.data = qs.stringify(data) 
    }

    const token = store.getState().user.token
    if(token){
        config.headers['Authorization'] = 'atguigu_'+token
    }

    return config 
}))

instance.interceptors.response.use(
    response => {
        console.log('response interceptor onResolved()')
        NProgress.done()//隐藏请求进度

        const result = response.data
        /* if(result.status===0){
            return result.data || {} //避免取值时undefined报错
        }else{
            return Promise.reject(result.msg || '操作失败，未知原因')
        } */
        return result
    },
    error => {
    console.log('response iterceptor onRejected()')
    NProgress.done()//隐藏请求进度
  
    const {status,data:{msg}={}} = error.response
    if(status===401){
    //   error.response.data.msg   //啥时候删除的？

       if(history.location.pathname !== '/login'){//this.props.history.location.pathname
        message.error(msg)
        store.dispatch(removeUserToken())  
       }
      
    }else if(status===404){
        message.error('请求支援不存在')
    }else{
        message.error('请求出错：'+error.message) 
    }
    
    
    return new Promise(()=>{}) 
    } 
)

export default instance 