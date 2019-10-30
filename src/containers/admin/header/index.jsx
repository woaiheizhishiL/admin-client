import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
// import dayjs from 'dayjs'
import format from 'date-fns/format'
import {Modal} from 'antd'

import './index.less'
import LinkButton from '../../../components/link-button'
import {removeUserToken} from '../../../redux/action-creators/user'


@connect(
    state => ({username:state.user.user.username},
    {removeUserToken}
))
@withRouter       //向组件内部传入三个属性：history/location/match
class Header extends Component {
    state = {
        // currentTime:dayjs().format('YYYY-MM-DD HH:mm:ss')
        currentTime:format(Date.now(),'yyy-MM-dd HH:mm:ss')

    }

    logout = () => {
        Modal.confirm({
            title: '确认退出吗?',
            onOk:() =>{
              this.props.removeUserToken()
            },
            onCancel() {
              console.log('Cancel');
            },
          })
    }

    componentDidMount (){
        this.intervalId = setInterval(() => {
            this.setState({
                // currentTime:dayjs().format('YYYY-MM-DD HH:mm:ss')
                currentTime:format(Date.now(),'yyy-MM-dd HH:mm:ss')
            })
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    render() {

        const path = this.props.location.pathname
        const {currentTime} = this.state

        return (
            <div className="header">
                <div className="header-top">
                    <span>欢迎，{this.props.username}</span>
                    <LinkButton onClick={this.logout}>退出</LinkButton>
                </div> 
                <div className="header-bottom">
                    <div className="header-bottom-left">{path}</div>
                    <div className="header-bottom-right">
                        <span>{currentTime}</span>
                        <img src="" alt="weather"/>
                        <span>小雨转多云</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header
