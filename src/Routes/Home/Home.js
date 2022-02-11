import React, { Component } from 'react';
import './Home.css'
import axios from 'axios'
import { Form, Input, Button, Checkbox } from 'antd';
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {ft:true,name:undefined,checked:false,finished:false}
    }
    handleClick = ()=>{
        var url='https://api.quicboar.boatonland.com/user/login.php'
        
        //1. 判断是否check
            if(this.state.checked){
                //2. 发送ajax请求，判断账号密码是否正确
                //基于ajax的请求，基于JS的原生fetch，都不能请求到资源
                fetch(url,{
                    method:'POST',
                    headers:{'Content-type':'application/x-www-form-urlencoded; charset=UTF-8'},
                    body:'user_uid=1&user_name=user1&user_password=123456',
                }).then(response=>{
                    console.log(response.text());
                })
                //被同源限制了
                // axios({
                //     method: 'post',
                //     url:url,
                //     data: data
                // }).then(response=>{
                //     console.log(response)
                // });
                if(true){
                    //正确，将账户信息存储在session中
                    sessionStorage.setItem('name','王大力')
                    sessionStorage.setItem('UID','92231223')
                    // 3. 判断是否完成问卷
                    if(this.state.finished){
                        //前往'./ft'
                        this.props.history.push('/ft')
                    }
                    else{
                        this.props.history.push('/mSRL')
                        //前往'./mySRL'
                    }
                }
                else{
                    alert('账号密码错误')
                }
            }
            else{
                alert('please check the contract')
            }
    }
    onCheck = ()=>{
        this.setState({checked:true});
    }
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
                            message: 'please input UID!',
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
                            message: 'Please input your name!',
                        },
                        ]}
                    >
                        <Input.name placeholder='please input name'/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
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
                        <Checkbox onChange={this.onCheck}>I have read  the &nbsp;
                            <a href='https://docs.google.com/document/d/1oezoLjyqZlttaF8o7DQH-ChQto7K7DUAjFeCeofkSjo/edit?usp=sharing'>contract</a>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit" onClick={this.handleClick}>
                            submit
                        </Button>
                    </Form.Item>
                    </Form>
                </div>
        </div>
    </div>;
  }
}
