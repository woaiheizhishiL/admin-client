import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Admin extends Component {

  render() {
    if (!this.props.hasLogin){
      return <Redirect to="/login"/>
    }    

    return (
      <div>
        Hello,{this.props.user.username}
      </div>
    )
  }
}

export default connect(
  state => ({user:state.user.user,hasLogin:state.user.hasLogin}),
  {}
)(Admin) 