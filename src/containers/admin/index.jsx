import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {Redirect} from 'react-router-dom'
import { Layout } from 'antd';
import {Route,Switch,Redirect} from 'react-router-dom'

// import { removeUserToken } from '../../redux/action-creators/user'
// import {reqUsers} from '../../api'
import LeftNav from './left-nav'
import AdminHeader from './header'
import WithCheckLogin from '../with-check-login'
import Home from '../../components/home'
import Category from '../category'
import Product from '../products'
import Role from '../role'
import User from '../user'
import Line from '../../components/charts/line'
import Bar from '../../components/charts/bar'
import Pie from '../../components/charts/pie'



const { Header, Footer, Sider, Content } = Layout;


/* connect(
  state => ({user:state.user.user,hasLogin:state.user.hasLogin}),
  {removeUserToken}
)(WithCheckLogin(Admin)) 
 */

/* @connect(
  state => ({user:state.user.user}),
  {removeUserToken}
)  */
@WithCheckLogin
class Admin extends Component {

  /* logout = () => {
    this.props.removeUserToken()
  }

  getUsers = async () => {
    reqUsers()
    const result = await reqUsers()
    console.log('result',result)
  } */

  render() {
    /* if (!this.props.hasLogin){
      return <Redirect to="/login"/>
    }  */   

    return (
      /* <div>
       <p>Hello,{this.props.user.username}</p>
       <button onClick={this.logout}>退出登录</button>
       <button onClick={this.getUsers}>获取用户列表</button>
      </div> */

      <Layout style={{height:"100%"}}>
        <Sider >
          <LeftNav/>
        </Sider>
        <Layout>
            <AdminHeader/>
          <Content style={{backgroundColor:"white",margin:"30px 15px 0 15px"}}>
            <Switch>
              <Route path="/home" component={Home}/>
              <Route path="/category" component={Category}/>
              <Route path="/product" component={Product}/>
              <Route path="/role" component={Role}/>
              <Route path="/user" component={User}/>
              <Route path="/charts/line" component={Line}/>
              <Route path="/charts/bar" component={Bar}/>
              <Route path="/charts/pie" component={Pie}/>
              <Redirect to="/home"/>
            </Switch>
          </Content>
          <Footer style={{textAlign:"center"}}>推荐使用谷歌浏览器，可以活得更加页面操作体验</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Admin