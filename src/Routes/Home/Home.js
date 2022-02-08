import React, { Component } from 'react';
import './Home.css'
import { Form, Input, Button, Checkbox } from 'antd';
import {Link} from 'react-router-dom'

const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
export default class Home extends Component {
  render() {
    return <div className='home-main'>
        <div className='login-part'>
                <div className='welcome'>
                    <div className='head'>
                        欢迎使用HKU-SRL
                    </div>
                    <div>
                        welcome to HKU-SRL
                    </div>
                </div>
                <div className='login'>
                    权限验证
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                    <Form.Item

                        name="UID"
                        rules={[
                        {
                            required: true,
                            message: 'please input UID',
                        },
                        ]}
                    >
                        <Input placeholder='please input UID'/>
                    </Form.Item>

                    <Form.Item
                        name="name"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your name',
                        },
                        ]}
                    >
                        <Input.name placeholder='please input name'/>
                    </Form.Item>
                    <Form.Item
                        name="name"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                        ]}
                    >
                        <Input.name placeholder='please input password'/>
                    </Form.Item>
                    <Form.Item
                        name="read"
                        valuePropName="unchecked"
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Checkbox>I have read  the &nbsp;
                            <a href=''>contract</a>
                        </Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Link to="/ft">
                        <Button type="primary" htmlType="submit">
                            submit
                        </Button>
                        </Link>
                    </Form.Item>
                    </Form>
                </div>
        </div>
    </div>;
  }
}
