import React from 'react'
import { connect } from 'react-redux'

import Counter from '../components/counter'
import { increment,decrement } from '../redux/action-creators'

// const mapStateToprops = function (state) {
//     return {
//         count: state
//     }
// }
// const mapStateToprops =state => ({count: state})

// const mapDispatchToProps = (dispatch) => ({
//     increment: number => dispatch(increment(number)),
//     decrement: number => dispatch(decrement(number))
// })

// export default connect(
//     mapStateToprops,
//     mapDispatchToProps
// )(Counter) 

export default connect(
    state => ({count: state}),
    {increment,decrement}
)(Counter) 

 