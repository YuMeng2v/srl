import React, { Component } from 'react';
import './Header.css'
import {Link} from 'react-router-dom'
export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {name:'王大力',UID:'92231223'}
    }
    componentDidMount(){
        let namei,UIDi;
        try{
          namei = sessionStorage['user_name'];
          UIDi = sessionStorage['user_uid'];
          this.setState({name:namei,UID:UIDi})
      }
        catch{
            console.log('here');
            this.props.history.push('/');
        }
    }
    render() {
        if(this.props.ft){
            return (
                <div className='ft-main'>
                    <div className="ft-left">
                        HKU-SRL
                    </div>
                    <div className="ft-center">
                        First time login questionaire
                    </div>
                    <div className="ft-right">
                        <div>
                            
                        </div>
                        <div>
                            {this.state.name}:{this.state.UID}&nbsp;
                            <Link to="/">
                                退出
                            </Link>
                        </div>
                    </div>
                </div>
            )
        }else{
        return(
            <div className='ft-main'>
                <div className="ft-left">
                    HKU-SRL
                </div>
                <div className="ft-right">
                    <div>
                        {this.state.name}:{this.state.UID}&nbsp;
                        <Link to="/">
                            退出
                        </Link>
                    </div>
                </div>
            </div>
        )
  }}
}
