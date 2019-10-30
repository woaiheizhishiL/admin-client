import React, { Component } from 'react'
import './index.less'
import LinkButton from '../../../components/link-button'

export default class AdminHeader extends Component {

    logout = () => {
        alert('logout')
    }
    render() {
        return (
            <div className="header">
                <div className="header-top">
                    <span>欢迎，xxx</span>
                    <LinkButton onClick={this.logout}>退出</LinkButton>
                </div> 
                <div className="header-bottom">
                    <div className="header-bottom-left">折线图</div>
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
