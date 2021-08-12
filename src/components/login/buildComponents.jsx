import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import HeaderComponent from '../HeaderComponent'
import HomeView from '../home/homeView'
class buidlComponents extends Component{
    render(){
        return(
            <div className="TodoApp">
                <Router>
                    <Switch>
                        <Route path = "/login"  component = {HeaderComponent}></Route>
                        <Route path = "/homeView"  component = {HomeView}></Route>
                    </Switch>
                </Router>
               
            </div>
        )
       
    }

}

export default buidlComponents