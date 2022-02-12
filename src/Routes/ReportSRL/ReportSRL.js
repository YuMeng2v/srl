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
    //old version1
    /*
    const body = document.getElementsByTagName('body')[0];
    var script = document.createElement('script');
    script.src = '../../ultils/js/jsmind.js';
    body.appendChild(script);
    script = document.createElement('script');
    script.src = '../../ultils/js/jsmind.draggable.js';
    body.appendChild(script);
    script = document.createElement('script');
    script.src = '../../ultils/style/jsmind.css';
    body.appendChild(script);
    */
    //old version2 of jsmind:
    /*
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
      */
     // new version from Zhang Long
     
  }
  render() {
    return (
    //   <div className='rsrl-main'>
    //     <Header/>
    //     <div className='layout'>
    //         <div className='rsrl-operations'>

    //         </div>
    //         <div id='mind-content'>

    //         </div>
    //       </div>
    //     <Footer/>
    // </div>
    <div id="layout">
    <div id="jsmind_nav">
        <div>Edit</div>
        <ol type='A'>
            <li><button onClick="toggle_editable(this);">disable editable</button></li>
            <li><button onClick="add_node();">add a node</button></li>
            <li><button onClick="add_image_node();">add a image node</button></li>
            <li><button onClick="modify_node();">modify node</button></li>
            <li><button onClick="prompt_info('please try double click a node');">try double click</button></li>#}
            <li><button onClick="move_node();">move a node</button></li>
            <li><button onClick="move_to_first();">move to first</button></li>
            <li><button onClick="move_to_last();">move to last</button></li>
            <li><button onClick="remove_node();">remove node</button></li>
        </ol>
        <div>Report Style</div>
        <ol type='A'>
            <li><button onClick="change_text_font();">change font</button></li>#}
            <li><button onClick="change_text_color();">change color</button></li>#}
            <li><button onClick="change_background_color();">change bg-color</button></li>
            <li><button onClick="change_background_image();">change background</button></li>#}
            <li><button onClick="reset_background_color();">reset bg-color</button></li>
        </ol>
       <div>5. Theme</div>
      <ol type='A'>
        <li>
      <select onchange="set_theme(this.value);">
            <option value="">default</option>
           <option value="primary">primary</option>
           <option value="warning">warning</option>
            <option value="danger">danger</option>
            <option value="success">success</option>
            <option value="info">info</option>
            <option value="greensea" selected="selected">greensea</option>
            <option value="nephrite">nephrite</option>
            <option value="belizehole">belizehole</option>
            <option value="wisteria">wisteria</option>
            <option value="asphalt">asphalt</option>
            <option value="orange">orange</option>
            <option value="pumpkin">pumpkin</option>
            <option value="pomegranate">pomegranate</option>
           <option value="clouds">clouds</option>
           <option value="asbestos">asbestos</option>
        </select>
        </li>
        </ol>
        <div>Adjusting</div>
        <ol type='A'>
{#            <li><button onClick="change_container();">resize container</button>#}
{#            <button onClick="resize_jsmind();">adusting</button></li>#}
{#            <li>expand/containerollapse</li>#}
            <ol>
{#                <li><button onClick="resize_jsmind();">adusting</button></li>#}
                <li><button class="sub" onClick="expand();">expand node</button></li>
                <li><button class="sub" onClick="collapse();">collapse node</button></li>
{#                <li><button class="sub" onClick="toggle();">toggle node</button></li>#}
{#                <li><button class="sub" onClick="expand_to_level2();">expand to level 2</button></li>#}
{#                <li><button class="sub" onClick="expand_to_level3();">expand to level 3</button></li>#}
                <li><button class="sub" onClick="expand_all();">expand all</button></li>
                <li><button class="sub" onClick="collapse_all();">collapse all</button></li>
            </ol>
            <li>zoom</li>

            <button id="zoom-in-button" style="width:50px" onClick="zoomIn();">
                In
            </button>
            <button id="zoom-out-button" style="width:50px" onClick="zoomOut();">
                Out
            </button>
        </ol>

        <div>Save</div>
        <ol type='A'>
            <li>node_tree</li>
            <ol>
                <li><button class="sub" onClick="show_data();">show data</button></li>
                <li><button class="sub" onClick="save_data();">save data</button></li>
                <li><button class="sub" onClick="save_file();">save file</button></li>
                <li><input id="file_input" class="file_input" type="file"/></li>
                <li><button class="sub" onClick="open_file();">open file</button></li>
            </ol>
{#            <li>node_array</li>#}
{#            <ol>#}
{#                <li><button class="sub" onClick="get_nodearray_data();">show data</button></li>#}
{#                <li><button class="sub" onClick="save_nodearray_file();">save file</button></li>#}
{#                <li><input id="file_input_nodearray" class="file_input" type="file"/></li>#}
{#                <li><button class="sub" onClick="open_nodearray();">open file</button></li>#}
{#            </ol>#}
{#            <li>freemind(.mm)</li>#}
{#            <ol>#}
{#                <li><button class="sub" onClick="get_freemind_data();">show data</button></li>#}
{#                <li><button class="sub" onClick="save_freemind_file();">save file</button></li>#}
{#                <li><input id="file_input_freemind" class="file_input" type="file"/></li>#}
{#                <li><button class="sub" onClick="open_freemind();">open file</button></li>#}
{#            </ol>#}
        </ol>
    </div>
    <div id="jsmind_container"></div>
    <div style="display:none">
      <input class="file" type="file" id="image-chooser" accept="image/*"/>
    </div>
    )
}}
