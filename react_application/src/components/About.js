import React, { Component } from 'react';
import '../style/styles.css';

class About extends Component {
 render(){

  var typedArray = 'http://www.google.se';
  var blob = new Blob([typedArray], {type: 'application/octet-binary'}); // pass a useful mime type here
  console.log(blob);
  var url = URL.createObjectURL(blob);
  console.log(url);
  return(
    <section className="about-page">
     <div className="hero">
      <h1>Alexander Midjich</h1>
      <h2>Webbutvecklare</h2>
     </div>
     <div className="about-text">
      <div className="left-side-block">
      </div>
      <div className="content-wrapper">
       <p>Utbildad webbutvecklare med inriktning mot JavaScript och frontend. tekniker jag arbetar med är:</p>
       <ul>
        <li>HTML5</li>
        <li>CSS3, sass, Bootstrap</li>
        <li>JavaScript, jquery, React.js, node.js</li>
        <li>Wordpress</li>
       </ul>
       <p>Läs mer om mig, mina projekt eller kontakta mig via knapparna nedan.</p>
      </div>
     </div>
     <div className="about-contact">
      <div className="contact-wrapper">
       <div className="btn-round">
        <a href="https://github.com/AlexMidjich" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
       </div>
       <div className="btn-round">
        <a href="https://www.facebook.com/alexander.midjich" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
       </div>
       <div className="btn-round">
        <a href="https://www.linkedin.com/in/alexander-midjich-2031b751/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
       </div>
       <div className="btn-round">
        <a href="mailto:alexander@midjich.com"><i className="fa fa-envelope" aria-hidden="true"></i></a>
       </div>
      </div>
      <div className="right-side-block">
      </div>
     </div>
    </section>
  );
 }
}

export default About;
