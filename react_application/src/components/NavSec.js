import React, { Component } from 'react';
import About from './About';
import Work from './Work';
import Contact from './Contact'
import '../style/styles.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

class NavSec extends Component {
  render() {
    return (
     <Router>
      <section className="content">
       <div className="navbar">
        <ul>
         <li><NavLink exact activeClassName='activeNow' to='/about'>About</NavLink></li>
         <li><NavLink activeClassName='activeNow' to='/work' >Work</NavLink></li>
         <li><NavLink activeClassName='activeNow' to='/contact' >Contact</NavLink></li>
        </ul>
       </div>
        
       <Route exact path='/about' component={About}/>
       <Route path='/work' component={Work}/>
       <Route path='/contact' component={Contact}/>

      </section>
    </Router>
    );
  }
}

export default NavSec;
