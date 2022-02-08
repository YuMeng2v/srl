import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import "./FirstTime.css"
import {Link} from 'react-router-dom'

export default class FirstTime extends Component {
  constructor(props){
    super(props);
    this.state = {
      questions:["雷","雷","雷","雷","雷","雷","雷","雷","雷","雷","雷","雷","雷","雷","雷","雷","雷","雷"
      ,"雷","雷","雷","雷","雷","雷","雷","雷","雷","雷","雷","雷"],
      menu:[1,2,3,4,5]
    }
  }
  componentDidMount(){
    //验证session是否已经登陆
    let namei,UIDi;
    try{
        namei = sessionStorage['name'];
        UIDi = sessionStorage['UID'];
    }
    catch{
      this.props.history.push('/');
    }
    //Ajax
    // 更新question 和 menu
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
                  return <div>Q{key+1}:{x}</div>
                })
              }
            <div className="ft-submit">
                <Link to="/mSRL">
                  <button>SUBMIT</button>
                </Link>
            </div>
            </div>
            <div className="ft-menu">
              <div class="dropdown">
                  <button class="dropbtn">下拉菜单</button>
                  <div class="dropdown-content">
                      {
                        this.state.menu.map(x=>{
                          return <a>{x}</a>
                        })
                      }
                  </div>
                </div>
                <div class="dropdown">
                  <button class="dropbtn">下拉菜单</button>
                  <div class="dropdown-content">
                      {
                        this.state.menu.map(x=>{
                          return <a>{x}</a>
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

