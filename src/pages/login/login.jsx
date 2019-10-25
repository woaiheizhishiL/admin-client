import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";

import logo from "./images/logo.png";
import "./login.less";

const { Item } = Form;

export default class Login extends Component {
  handleSubmit = () => {};

  render() {
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo" />
          <h1>后台管理系统</h1>
        </header>
        <div className="login-content">
          <h1>用户登录</h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Item>
              <Input
                prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                placeholder="用户名"
              />
            </Item>
            <Item>
              <Input
                prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                type="password"
                placeholder="密码"
              />
            </Item>
            <Item>
            <Button type="primary" htmlType="submit" className="login-form-button" >登陆</Button>
            </Item>
          </Form>
        </div>
      </div>
    );
  }
}
