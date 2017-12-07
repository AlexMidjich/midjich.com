import React, { Component } from 'react';
import classnames from 'classnames';
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


class NavSec extends Component {
  constructor(){
    super();
    this.state = {
      menuHide: false,
    }
  }
  hideMenu = () => {
    this.setState({ menuHide: !this.state.menuHide })
  }

  render() {
    let classes = classnames('navbar', {open: this.state.menuHide})
    const menu = this.state.menuHide ?
       <ul>
        <li><NavLink exact activeClassName='activeNow' to='/about' onClick={ this.hideMenu }>Om mig</NavLink></li>
        <li><NavLink activeClassName='activeNow' to='/work' onClick={ this.hideMenu }>Portfolio</NavLink></li>
       </ul>
    :
    null;

    return (
    <div className="content" >
     <div className="hamburger-btn" onClick={ this.hideMenu }>
      <div className="long-line"></div>
      <div className="short-line"></div>
      <div className="long-line"></div>
     </div>
      <Router  >
       <div className="main-content" >
        <div className={classes}>
         { menu }
        </div>
        <Route exact path='/about' component={About} history={history} />
        <Route path='/work' component={Work} history={history} />

       </div>
     </Router>
    </div>
    );
  }
}

export default NavSec;
