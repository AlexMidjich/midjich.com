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
    <Router>
     <section className="content" >

       <ul>
        <li><NavLink exact activeClassName='activeNow' to='/about'>About</NavLink></li>
        <li><NavLink activeClassName='activeNow' to='/work' >Work</NavLink></li>
        <li><NavLink activeClassName='activeNow' to='/contact' >Contact</NavLink></li>
       </ul>


      <Route exact path='/about' component={About}/>
      <Route path='/work' component={Work}/>
      <Route path='/contact' component={Contact}/>
     </section>
   </Router>
    :
    null;

    return (
    <div className="navbar" >
      <div className="hamburger-btn" onClick={ this.hideMenu }>
        <div className="long-line"></div>
        <div className="short-line"></div>
        <div className="long-line"></div>
      </div>
     { menu }
   </div>
    );
  }
}

export default NavSec;
