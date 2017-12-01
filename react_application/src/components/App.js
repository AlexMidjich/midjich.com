import React, { Component } from 'react';
import NavStart from './NavStart';
import NavSec from './NavSec';
import '../style/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuToggle: true,
    }
  }

  toggleMenu = () => {
    this.setState({ menuToggle: !this.state.menuToggle })
  }

  render() {
    const path = window.location.pathname;
    console.log(path);
    return (
      <div>
        { path === '/work' || path === '/about' || path === '/contact' || path === '/admin' || path === '/test' ?
          <NavSec />
          :
          <NavStart toggleMenu={ this.toggleMenu }/>
        }
      </div>
    );
  }
}

export default App;
