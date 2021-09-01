import React, {Component} from 'react';
import {LockOutlined, KeyOutlined, UserOutlined} from "@ant-design/icons";
import '../App.less';
import '../less/login.less'
import {Form, Input, Button, Checkbox} from 'antd';
import {connect} from "react-redux";
import axios from "axios";
class LoginComponent extends Component {
    constructor(p) {
        super(p);
    }
    checkUserName = (_, value) => {
    if (value !== undefined) {
        return Promise.resolve();
    }
        return Promise.reject(new Error('请输入用户名称!'));
    };
    checkPassWord = (_, value) => {
        if (value !== undefined) {
            return Promise.resolve();
        }
        return Promise.reject(new Error('请输入登录密码!'));
    };
    checkValidCode = (_, value) => {
        if (value !== undefined) {
            return Promise.resolve();
        }
        return Promise.reject(new Error('验证码错误!'));
    };
    handleSubmit = (values) =>{
        debugger;


    }
    componentDidMount() {
        this.props.createValidateCode();
    }

    render() {return(
        <div className="login-box">
        <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            initialValues={{ remember: true }}
            // onClick={this.props.handleSubmit.bind(this)}
            onFinish={this.props.handleSubmit.bind(this)}
            // onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="用户名称"
                name="name"
                rules={[{  validator: this.checkUserName }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} />
            </Form.Item>

            <Form.Item
                label="登录密码"
                name="pwd"
                rules={[{ validator: this.checkPassWord }]}
            >
                <Input.Password prefix={<LockOutlined className="site-form-item-icon" />}/>
            </Form.Item>

            <Form.Item
                label="验证码"
                name="validateCode"
                rules={[{ validator:this.checkValidCode }]}
            >
                <Input prefix={<KeyOutlined className="site-form-item-icon"/>} />
            </Form.Item>
            <Form.Item
                label="验证码"
            >
                <img id="image"
                     src={this.props.validateCodePic}
                     className="imgClass"/>
                <a
                href="javascript:void(0)" onClick="changeCheckCode();return false;">看不清，换一张</a>
            </Form.Item>
            <Form.Item valuePropName="checked" wrapperCol={{ offset: 6, span: 18 }}>
                <Checkbox>记住密码</Checkbox>

                <a className="login-form-forgot" href="">
                    忘记密码
                </a>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
                <Button type="primary">
                    人脸识别
                </Button>
                <Button type="primary" >
                    注册
                </Button>
                <Button type="primary" htmlType="submit">
                    登录
                </Button>
            </Form.Item>
        </Form>
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        validateCodePic: state.validateCodePic
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMenulist(e) {
            const action = {
                type: "get_menu_list_action"
            }
            dispatch(action);
        },
        handleSubmit(e) {
            const action = {
                type: "user_login_action",
                data: e
            }
            dispatch(action);
        },
        createValidateCode(e) {
            const action = {
                type: "create_validateCode_action",
                data: e
            }
            dispatch(action);
        },
    };
}
export default  connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
