import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu/Menu'
import './newSRL.css'
export default class newSRL extends Component {
  constructor(props){
    super(props);
    this.state = {menu:['1','2']}
  }
  componentDidMount(){
    let namei=sessionStorage['name'],UIDi=sessionStorage['UID'];
    if(namei!=undefined&&UIDi!=undefined){
      this.setState({name:namei,UID:UIDi});
    }
    else{
      this.props.history.push('/');
    }
  }
  handleclick = ()=>{
    //
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
              <input></input>
            </div>
            <div>
                Please indicate what do you want to learn for this week?
                <br/>
                <input></input>
            </div>
            <div>
              Select the activities that can help you achieve your goals
              <div className='nsrl-dropdown'>
                <Menu menud={this.state.menu}/>
              </div>
            </div>
            <div>
              How much work do you plan to accomplish?
              <div>
                <Menu menud={this.state.menu}/>
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
