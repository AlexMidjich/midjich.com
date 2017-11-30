import React, { Component } from 'react';
import About from './About';
import Work from './Work';
import Contact from './Contact'
import Admin from './Admin'
import '../style/styles.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

class NavSec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuHide: false,
    }
  }

  hideMenu = () => {
    this.setState({ menuHide: !this.state.menuHide })
  }

  render() {
    const menu = this.state.menuHide ?
       <ul>
        <li><NavLink exact activeClassName='activeNow' to='/about'>Om mig</NavLink></li>
        <li><NavLink activeClassName='activeNow' to='/work' >Portfolio</NavLink></li>
        <li><NavLink activeClassName='activeNow' to='/contact' >Kontakt</NavLink></li>
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
        <div className="navbar">
         { menu }
        </div>
        <Route exact path='/about' component={About}/>
        <Route path='/work' component={Work}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/admin' component={Admin}/>
       </div>
     </Router>
    </div>
    );
  }
}

export default NavSec;
