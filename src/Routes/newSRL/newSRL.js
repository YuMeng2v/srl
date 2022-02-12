import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu/Menu'
import './newSRL.css'
export default class newSRL extends Component {
  constructor(props){
    super(props);
    this.state = {menu:['1','2'],name:undefined,UID:undefined,input_name:undefined,input_target:undefined,act:undefined,hour:undefined}
  }
  /*
  states:
  menu: 下拉菜单
  name: 
  UID:
  input_name: 输入name
  input_target: 这周想要学啥
  act: 这周想要学啥
  hour: 这周想要学多久
  */
  componentDidMount(){
    //1.查看浏览器有没有存储session
    let namei=sessionStorage['user_name'],UIDi=sessionStorage['user_uid'];
    if(namei!=undefined&&UIDi!=undefined){
      this.setState({name:namei,UID:UIDi});
    }
    else{
      this.props.history.push('/');
    }
  }
  handleclick = ()=>{
    //向数据库发布异步请求添加
    var url = 'https://api.quicboar.boatonland.com/srldata/create.php'
    fetch(url,{
      method:'POST',
      headers:{'Content-type':'application/x-www-form-urlencoded; charset=UTF-8'},
      body: `user_uid=${this.state.UID}&srl_id=1&srl_report_data=${this.state.input_target}&srl_goal=${this.state.hour}`
    }).then(response=>{
      return response.text()
    }).then(data=>console.log(data));
  }
  handleNameChange = (e)=>{
    this.setState({input_name:e.target.value});
  }
  handleLearnChange=(e)=>{
    this.setState({input_target:e.target.value});
  }
  handleMenu1=(e)=>{
    this.setState({act:e.target.text})
    //console.log(e.target.text);
  }
  handleMenu2=(e)=>{
    this.setState({hours:e.target.text});
    //console.log(e.target.text)
  }
  render() {
    return <div className='nsrl-main'>
        <Header/>
        <div className='nsrl-content'>
            <div>
                New SRL Page
            </div>
            <div>
              Name
              <input onChange={this.handleNameChange.bind(this)}></input>
            </div>
            <div>
                Please indicate what do you want to learn for this week?
                <br/>
                <input onChange={this.handleLearnChange.bind(this)}></input>
            </div>
            <div>
              Select the activities that can help you achieve your goals
              <div className='nsrl-dropdown'onClick={this.handleMenu1}>
                <Menu menud={this.state.menu} />
              </div>
            </div>
            <div>
              How much work do you plan to accomplish?
              <div onClick={this.handleMenu2}>
                <Menu menud={this.state.menu} />
              </div>
            </div>
            <div>
              <div>
                How long do you expect to work on these tasks?
              </div>
              <input placeholder='Unit is hour, please enter the whole number'></input>
            </div>
            <div className='nsrl-submit'>
                <button onClick={this.handleclick}>submit</button>
            </div>
        </div>
        <Footer/>
    </div>;
  }
}
