import React,{Component} from 'react'
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './Routes/Home/Home'
import FirstTime from './Routes/FirstTime/FirstTime'
import EditSRL from './Routes/EditSRL/EditSRL'
import mySRL from './Routes/mySRL/mySRL'
import newSRL from './Routes/newSRL/newSRL'
import ReportSRL from './Routes/ReportSRL/ReportSRL'
import './Route.css'
export default class RouterWrap extends Component{
    render(){
        return (
            <div className='br'>
                <BrowserRouter>
                    <Route>
                        <Route path="/" component = {Home} exact></Route>
                        <Route path="/ft" component={FirstTime} exact></Route>
                        <Route path="/eSRL" component={EditSRL} exact></Route>
                        <Route path="/mSRL" component={mySRL} exact></Route>
                        <Route path="/nSRL" component={newSRL} exact></Route>
                        <Route path="/rSRL" component={ReportSRL} exact></Route>
                    </Route>
                </BrowserRouter>
            </div>
        )
    }
}