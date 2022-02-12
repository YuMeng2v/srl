import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu/Menu'
import "./FirstTime.css"
import {Link} from 'react-router-dom'
import {InputNumber} from 'antd'
export default class FirstTime extends Component {
  constructor(props){
    super(props);
    this.state = {
      questions:['Loading'],
      menu:[1,2,3,4,5]
    }
  }
  componentDidMount(){
    //验证session是否已经登陆
    let namei,UIDi;
    try{
        namei = sessionStorage['user_name'];
        UIDi = sessionStorage['user_uid'];
    }
    catch{
      this.props.history.push('/');
    }
    //Ajax
    // 更新question 和 menu
    fetch(`/statics/question.txt`).then(response=>{
      return response.text();
      //this.setState({questions:response.text()});
  }).then(value=>{
    //console.log(value.split('\n'));
    this.setState({questions:value.split('\n')});
  })
  }
  inputchange=(e)=>{
    console.log(e) // 只有value的值，并没有传入整个节点
  }
  render() {
    return (
    <div className='first-main'>
        <div>
          <Header ft={true}/>
        </div>
        <div className='ft-Content'>
            <div className="ft-question">{
                this.state.questions.map((x,key)=>{
                  return (
                    <div className='menu-item' key={key}>
                  <div>Q{key+1}:&nbsp;{x}<br/>Note:please input a number in 1~5</div>
                  <InputNumber max={5} min={1}  controls={false} onChange={this.inputchange}/>
                  </div>
                  )
                })
              }
              <div className="ft-submit">
                  <Link to="/mSRL">
                    <button>SUBMIT</button>
                  </Link>
              </div>
            </div>
            <div className="ft-menu">
                <Menu menud={this.state.menu}/>
                <div className="dropdown">
                  <button className="dropbtn">下拉菜单</button>
                  <div className="dropdown-content">
                      {
                        this.state.menu.map((x,key)=>{
                          return (               
                              <a key={key}>{x}</a>                        
                          )
                        })
                      }
                  </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
  }
}

