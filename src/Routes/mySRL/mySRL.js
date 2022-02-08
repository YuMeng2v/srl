import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './mySRL.css'
export default class mySRL extends Component {
  constructor(props){
    super(props)
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
  render() {
    return (
      <div className='ms-main'>
          <div className="ms-head">
              <Header/>
          </div>
          <div className='ms-content'>
            <div className='ms-left'>
              <div className='ms-left-head'>

              </div>
              <div className='ms-left-table'></div>
            </div>
            <div className='ms-right'>
              <div className='ms-right-nengli'>

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
