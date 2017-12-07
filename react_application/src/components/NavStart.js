import React, { Component } from 'react';
import About from './About';
import Work from './Work';
import '../style/styles.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

class NavStart extends Component {
  render() {
    return (
     <Router>
      <section className="nav-content">
       <div className="page-title">
        <h1>Alexander Midjich</h1>
        <h2>Webbutvecklare</h2>
       </div>
       <div className="about">
        <NavLink exact activeClassName='activeNow' to='/about' onClick={ this.props.toggleMenu }>
          <div className="about-page-link" >
            <div className="page-link-content">
              <h2>Om mig</h2>
              <hr className="divider"/>
            </div>
          </div>
        </NavLink>

       </div>
       <div className="work">
        <NavLink activeClassName='activeNow' to='/work' onClick={ this.props.toggleMenu }>
          <div className="work-page-link">
            <div className="page-link-content">
              <h2>Portfolio</h2>
              <hr className="divider"/>
            </div>
          </div>
        </NavLink>
       </div>

       <Route exact path='/about' component={About} history={history}/>
       <Route path='/work' component={Work} history={history}/>

      </section>
    </Router>
    );
  }
}

export default NavStart;
