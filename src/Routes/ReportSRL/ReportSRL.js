import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';
import './ReportSRL.css'
import {Helmet} from "react-helmet";
//import {jsMind} from 'jsmind'

export default class ReportSRL extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount(){
    // const body = document.getElementsByTagName('body')[0];
    // var script = document.createElement('script');
    // script.src = '../../ultils/js/jsmind.js';
    // body.appendChild(script);
    // script = document.createElement('script');
    // script.src = '../../ultils/js/jsmind.draggable.js';
    // body.appendChild(script);
    // script = document.createElement('script');
    // script.src = '../../ultils/style/jsmind.css';
    // body.appendChild(script);
    function load_jsmind(){
        var mind = {
              "meta":{
                  "name":"demo",
                  "author":"hizzgdev@163.com",
                  "version":"0.2",
              },
              "format":"node_array",
              "data":[
                  {"id":"root", "isroot":true, "topic":"jsMind"},

                  {"id":"sub1", "parentid":"root", "topic":"sub1", "background-color":"#0000ff"},
                  {"id":"sub11", "parentid":"sub1", "topic":"sub11"},
                  {"id":"sub12", "parentid":"sub1", "topic":"sub12"},
                  {"id":"sub13", "parentid":"sub1", "topic":"sub13"},

                  {"id":"sub2", "parentid":"root", "topic":"sub2"},
                  {"id":"sub21", "parentid":"sub2", "topic":"sub21"},
                  {"id":"sub22", "parentid":"sub2", "topic":"sub22","foreground-color":"#33ff33"},

                  {"id":"sub3", "parentid":"root", "topic":"sub3"},
              ]
          };
          var options = {
              container:'mind-content',
              editable:true,
              theme:'primary'
          }
          var jm = window.jsMind.show(options,mind);
          // jm.set_readonly(true);
          // var mind_data = jm.get_data();
          // alert(mind_data);
          jm.add_node("sub2","sub23", "new node", {"background-color":"red"});
          jm.set_node_color('sub21', 'green', '#ccc');
    }
      load_jsmind();
  }
  render() {
    return (
      <div className='rsrl-main'>
        <Header/>
        <div className='layout'>
            <div className='rsrl-operations'>

            </div>
            <div id='mind-content'>

            </div>
          </div>
        <Footer/>
    </div>
    )
}}
