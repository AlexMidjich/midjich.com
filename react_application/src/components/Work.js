import React, { Component } from 'react';
import '../style/styles.css';

class Work extends Component {
 render(){
   return(
    <section className="work-page">
      <div className="hero">
        <h1>Portfolio</h1>
      </div>
      <div className="page-wrapper">
        <h2>Här visas ett axplock av de projekt jag arbetat med</h2>
        <div className="cases">
          <div className="big-case">
          </div>
          <div className="big-case">
          </div>
          <div className="small-case">
          </div>
          <div className="small-case">
          </div>
        </div>
      </div>
    </section>
  );
 }
}

export default Work;
