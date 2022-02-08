import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
export default class mySRL extends Component {
  render() {
    return (
      <div className='ms-main'>
            <div className="ms-head">
              <Header/>
            </div>
        <div className='ms-content'>

        </div>
        <div className="ms-footer">
          <Footer/>
        </div>
    </div>
    )
  }
}
