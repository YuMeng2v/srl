import React, { Component } from 'react';
import './Menu.css';
export default class Menu extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
    return <div className='mn-main'>
      {/* 返回props.menud */}
      <div className="dropdown">
                  <button className="dropbtn">下拉菜单</button>
                  <div className="dropdown-content">
                      {
                        this.props.menud.map(x=>{
                          return <a>{x}</a>
                        })
                      }
                  </div>
        </div>
    </div>;
  }
}
