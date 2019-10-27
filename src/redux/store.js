import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducer'

const IS_DEV = process.env.NODE_ENV==='development' //当前环境是否为开发环境

export default createStore(
    reducer,
    IS_DEV? composeWithDevTools(applyMiddleware(thunk)):applyMiddleware(thunk)
    )
