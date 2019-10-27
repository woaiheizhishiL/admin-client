import {INCREMENT,DECREMENT} from './action-types'

const initCount = 1
function count (state = initCount,action) {
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