import React, { Component } from 'react';
import './Home.css'
import axios from 'axios'
import { Form, Input, Button, Checkbox } from 'antd';
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet';
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {ft:true,name:undefined,checked:false,finished:false,user_uid:1,user_name:1,user_password:1}
    }
    handleClick = ()=>{
        var url='https://api.quicboar.boatonland.com/user/login.php'
        
        //1. 判断是否check
            if(this.state.checked){
                //2. 发送ajax请求，判断账号密码是否正确
                fetch(url,{
                    method:'POST',
                    headers:{'Content-type':'application/x-www-form-urlencoded; charset=UTF-8'},
                    body:`user_uid=${this.state.user_uid}&user_name=${this.state.user_name}&user_password=${this.state.user_password}`,
                }).then(response=>{
                    return response.text();
                }).then(data=>{
                    data = JSON.parse(data);
                    console.log(data.code);
                    if(data.code==201){
                        alert(data.msg)
                    }
                    else if(data.code==501){
                        //输入为空
                        alert('empty input')
                    }else{
                        sessionStorage.setItem('user_name',this.state.user_name)
                        sessionStorage.setItem('user_uid',this.state.user_uid)
                        console.log(document.cookie);
                        sessionStorage.setItem('cookie',document.cookie);
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
                });
                   //正确，将账户信息存储在session中
            }
            else{
                alert('please check the contract')
            }
    }
    onCheck = ()=>{
        this.setState({checked:true});
    }
    handleNameChange=(a)=>{
        //console.log(a.target.value);
        this.setState({user_name:a.target.value})
    }
    handleUIDChange=(a)=>{
        //console.log(a.target.value);
        this.setState({user_uid:a.target.value});
    }
    handlePwdChange=(a)=>{
        //console.log(a.target.value);
        this.setState({user_password:a.target.value});
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
                    <input placeholder='name' type="text" onChange={this.handleNameChange.bind(this)}></input>
                    <input placeholder='UID' type="text" onChange={this.handleUIDChange.bind(this)}></input>
                    <input placeholder='password' type="text" onChange={this.handlePwdChange.bind(this)}></input>
                    <Checkbox onChange={this.onCheck}>I have read  the &nbsp;
                            <a href='https://docs.google.com/document/d/1oezoLjyqZlttaF8o7DQH-ChQto7K7DUAjFeCeofkSjo/edit?usp=sharing'>contract</a>
                    </Checkbox>
                    <Button type="primary" htmlType="submit" onClick={this.handleClick}>
                        submit
                    </Button>
                </div>
        </div>
    </div>;
  }
}
