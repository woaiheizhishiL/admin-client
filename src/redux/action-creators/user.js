import {reqLogin} from '../../api'
import { message } from 'antd'
import { isImport } from '@babel/types'

import {SAVE_USER_TOKEN} from '../action-types'

const saveUserToken = (user,token) => ({type:SAVE_USER_TOKEN,data:{user,token}})

 export function loginAsync(username,password){
     return async dispatch => {
        const result = await reqLogin({username,password})
        if (result.status===0){
            const {user,token} = result.data

        dispatch(saveUserToken(user,token))

        }else{
            message.error(result.msg)
        }
     }
 }    