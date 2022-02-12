import React, { Component } from 'react';
import './Menu.css';
export default class Menu extends Component {
    constructor(props){
        super(props); 
    }
    handleClick = ()=>{
      //改变样式
      var x = document.getElementsByClassName('dropdown-content');
      console.log(x.item);
      // x.items.forEach(element => {
      //     console.log(element);
      // });
    }
    render() {
    return <div className='mn-main'>
      {/* 返回props.menud */}
      <div className="dropdown">
            <button className="dropbtn">下拉菜单</button>
            <div className="dropdown-content" onClick={this.handleClick}>
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
