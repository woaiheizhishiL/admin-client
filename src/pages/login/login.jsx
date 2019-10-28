import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import qs from 'qs'

import logo from "./images/logo.png";
import "./login.less";
import ajax from '../../api/ajax'

const { Item } = Form;

class Login extends Component {
  handleSubmit = event => {
    event.preventDefault(); //阻止表单提交

    this.props.form.validateFields((err, values) => {
      //对所有表单项进行统一的表单验证
      if (!err) {
        //成功
        console.log("发ajax请求", values);

        //axios.post('/login',qs.stringify(values))//username=admin&password=admin
        //ajax.post('/login2',qs.stringify(values))
        ajax.post('/login2',values)

           .then(({user,token}) =>{
             console.log('登陆成功',user,token)
           })
           .catch(error =>{
             console.log(error)
           })

      } else {
        //啥也不用写
      }
    });

    // const form = this.props.form
    // const username = form.getFieldValue('username')
    // const password = form.getFieldValue('password')
    // const values = form.getFieldsValue()
    // console.log('发ajax请求',username,password,values)
  };

  validatePwd = (rule, value, callback) => {
    // value = value.trim()
    if (value === "") {
      callback("密码必须输入");
    } else if (value.length < 4) {
      callback("密码必须大于等于4位");
    } else if (value.length > 12) {
      callback("密码必须小于等于12位");
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback("用户名必须是英文、数字或下划线组成");
    } else {
      callback();
    }
  };

  render() {
    // console.log('Login render()',this.props.form)
    const { getFieldDecorator } = this.props.form;

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
              {getFieldDecorator("username", {
                initialValue: "", //设置初始值,老师报错了，说length of undefined,但是我没有报错啊
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: "用户名必须输入"
                  },
                  { min: 4, message: "用户名不能小于4位" },
                  { max: 12, message: "用户名不能大于12位" },
                  {
                    pattern: /^[a-zA-Z0-9_]+$/,
                    message: "用户名必须是英文、数字或下划线组成"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="用户名"
                />
              )}
            </Item>
            <Item>
              {getFieldDecorator("password", {
                initialValue: "",
                rules: [{ validator: this.validatePwd }]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="密码"
                />
              )}
            </Item>
            <Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登陆
              </Button>
            </Item>
          </Form>
        </div>
      </div>
    );
  }
}

const LoginWrap = Form.create()(Login);
export default LoginWrap;
