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
                  {/* 头部 */}
                  <div>123</div>
              </div>
              <div className='ms-left-table'>
                  {/* 中间表格 */}
                  <table>
                    <tr>
                      <th>Name</th>
                      <th>Create Time</th>
                      <th>Save Time</th>
                      <th>Progress</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </table>
              </div>
            </div>
            <div className='ms-right'>
              <div className='ms-right-nengli'>
                  {/* 雷达图 */}
              </div>
              <div className='ms-right-advice'>
                  {/* SRL学习能力建议 */}
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
