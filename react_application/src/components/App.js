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

    return (
      <div>
        { this.state.menuToggle ?
          <NavStart toggleMenu={ this.toggleMenu }/>
          :
          <NavSec />
        }
      </div>
    );
  }
}

export default App;
