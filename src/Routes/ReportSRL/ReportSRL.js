import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';
import {Minder} from 'react-mind'
export default class ReportSRL extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    //
  }
  render() {
    return <div className='rsrl-main'>
        <Header/>
        <div className='layout'>
            
        </div>
        <Footer/>
    </div>;
  } 
}
