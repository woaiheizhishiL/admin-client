import {INCREMENT,DECREMENT} from '../action-types'

export const increment = (number) => ({type:INCREMENT,data:number})

export const decrement = (number) => ({type:DECREMENT,data:number})

export const incrementAsync = (number,delyTime) => {
    return dispatch => {
        setTimeout(() => {
             dispatch(increment(number))
        }, delyTime);
    } 
} 




// incrementAsync = (number,delayTime) => dispatch => {}     
// (number,delayTime) => dispatch => {} //整体是个函数，dispatch => {}是函数体，且被返回