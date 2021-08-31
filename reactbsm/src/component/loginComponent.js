import React, {Component} from 'react';
import {LaptopOutlined, NotificationOutlined, UserOutlined} from "@ant-design/icons";
import '../App.less';
import {Form, Input, Button, Checkbox} from 'antd';
import {connect} from "react-redux";
class LoginComponent extends Component {
    constructor(p) {
        super(p);
    }
    render() {return(
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMenulist(e) {
            const action = {
                type: "get_menu_list"
            }
            dispatch(action);
        }
    };
}
export default  connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
