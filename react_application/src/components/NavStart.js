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

class NavStart extends Component {
  render() {
    return (
     <Router>
      <section className="content">
       <div className="about">
        <div className="about-page-link">
         <NavLink exact activeClassName='activeNow' to='/about'>About</NavLink>
         <hr className="divider"/>
        </div>
       </div>
       <div className="work">
        <div className="work-page-link">
         <NavLink activeClassName='activeNow' to='/work' >Work</NavLink>
         <hr className="divider"/>
        </div>
       </div>
       <div className="contact">
        <div className="contact-page-link">
         <NavLink activeClassName='activeNow' to='/contact' >Contact</NavLink>
         <hr className="divider"/>
        </div>
       </div>

       <Route exact path='/about' component={About}/>
       <Route path='/work' component={Work}/>
       <Route path='/contact' component={Contact}/>

      </section>
    </Router>
    );
  }
}

export default NavStart;
