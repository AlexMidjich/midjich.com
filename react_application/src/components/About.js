import React, { Component } from 'react';
import '../style/styles.css';

class About extends Component {
 render(){
  return(
    <section className="about-page">
     <div className="hero">
      <h1>Alexander Midjich</h1>
      <h2>Webbutvecklare</h2>
     </div>
     <div className="about-text">
      <p>Hallå där, här kommer lite text om mig!</p>
     </div> 
    </section>
  );
 }
}

export default About;
