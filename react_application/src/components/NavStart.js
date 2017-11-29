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
      <section className="nav-content">
       <div className="about">
        <NavLink exact activeClassName='activeNow' to='/about' onClick={ this.props.toggleMenu }>
          <div className="about-page-link" >
            <h2>Om mig</h2>
            <hr className="divider"/>
          </div>
        </NavLink>

       </div>
       <div className="work">
        <NavLink activeClassName='activeNow' to='/work' onClick={ this.props.toggleMenu }>
          <div className="work-page-link">
           <h2>Portfolio</h2>
           <hr className="divider"/>
          </div>
        </NavLink>
       </div>
       <div className="contact">
        <NavLink activeClassName='activeNow' to='/contact' onClick={ this.props.toggleMenu }>
          <div className="contact-page-link">
           <h2>Kontakt</h2>
           <hr className="divider"/>
          </div>
        </NavLink>
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
