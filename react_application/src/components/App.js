import React, { Component } from 'react';
import About from './About';
import Work from './Work';
import Contact from './Contact'
import '../style/styles.css';

class App extends Component {
  render() {
    return (
     <section className="content">
      <div className="about">
       <About />
      </div>
      <div className="work">
       <Work />
      </div>
      <div className="contact">
       <Contact />
      </div>
     </section>
    );
  }
}

export default App;
