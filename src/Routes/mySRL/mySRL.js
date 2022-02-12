import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './mySRL.css'
import {Link} from 'react-router-dom'

export default class mySRL extends Component {
  constructor(props){
    super(props);
    this.state = {name:null,UID:null,tableset:{}};
  }
  componentDidMount(){
    let namei=sessionStorage['user_name'],UIDi=sessionStorage['user_uid'];
    console.log('UIDi',UIDi,'username',namei);
    if(namei!=undefined&&UIDi!=undefined){
      console.log('here')
      this.setState({name:namei,UID:UIDi});
      var url = 'https://api.quicboar.boatonland.com/srldata/get.php';
      fetch(url,{
        method:'POST',
        headers:{"Content-type":"application/x-www-form-urlcoded;charset=UTF-8"},
        body:`user_uid=1&srl_id=1&x=6`,
        //credentials: 'include'
      }).then(response=>{
        return response.text();
      }).then(data=>{
        data = JSON.parse(data);
        console.log(data.code);
      })
    }
    else{
      this.props.history.push('/');
    }
    //

  }
  render() {
    return (
      <div className='ms-main'>
          <div className="ms-head">
              <Header/>
          </div>
          <div className='ms-content'>
            <div className='ms-left'>
              <div className='ms-left-head'>
                  {/* 头部 */}
                  <div className='ms-left-head-left'>
                    <div>SRL List</div>
                    <div><Link to="/nSRL">新建</Link></div>
                  </div>
                  <div className='ms-left-head-right'>NOTE: Newly created once a week, the new process report needs to be submitted for the previous week</div>
              </div>
              <div className='ms-left-table' width="100%">
                  {/* 中间表格 */}
                  <table width="100%">
                    <tr>
                      <th width="30%">Name</th>
                      <th>Create Time</th>
                      <th>Save Time</th>
                      <th>Progress</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                    <tr>
                      <td>Week1 wangdali111</td>
                      <td>29-1-2022</td>
                      <td>29-1-2022</td>
                      <td>100%</td>
                      <td>Edit</td>
                      <td>Delete</td>
                    </tr>
                  </table>
              </div>
            </div>
            <div className='ms-right'>
              <div className='ms-right-nengli'>
                  {/* 雷达图 */}
                  雷达图
              </div>
              <div className='ms-right-advice'>
                  {/* SRL学习能力建议 */}
                  学习能力建议
              </div>
            </div>
          </div>
          <div className="ms-footer">
              <Footer/>
          </div>
    </div>
    )
  }
}