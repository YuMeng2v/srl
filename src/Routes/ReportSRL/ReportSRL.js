import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';
import './ReportSRL.css'
import {Helmet} from "react-helmet";

export default class ReportSRL extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount(){
    
  }
  render() {
    return (
      <div className='rsrl-main'>
        <Header/>
        <div className='layout'>
            <div className='rsrl-operations'>

            </div>
          <div className='mind-content'>
          </div>
          </div>
        <Footer/>
    </div>
    )
}}
