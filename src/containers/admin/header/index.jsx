import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import './index.less'
import LinkButton from '../../../components/link-button'


@connect(state => ({username:state.user.user.username}))
@withRouter       //向组件内部传入三个属性：history/location/match
class Header extends Component {

    logout = () => {
        alert('logout')
    }
    render() {

        const path = this.props.location.pathname

        return (
            <div className="header">
                <div className="header-top">
                    <span>欢迎，{this.props.username}</span>
                    <LinkButton onClick={this.logout}>退出</LinkButton>
                </div> 
                <div className="header-bottom">
                    <div className="header-bottom-left">{path}</div>
                    <div className="header-bottom-right">
                        <span>时间</span>
                        <img src="" alt="weather"/>
                        <span>小雨转多云</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header
