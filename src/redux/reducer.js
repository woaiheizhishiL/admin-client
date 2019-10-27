import {INCREMENT,DECREMENT} from './action-types'

const initCount = 1
export default function count (state = initCount,action) {
console.log('cont()',state,action)

    switch (action.type) { 
        case INCREMENT:
            return state + action.data
        case DECREMENT:
            return state - action.data
        default: 
            return state 
    }
}

const initProducts = []
function products(state=initProducts,action){
    switch (action.type) {
        case 'ADD_PRODUCT':
            const product = action.data
            // state.unshift(product)//不能直接修改state数据
            return [product,...state]
        default:
            break;
    }
}
 