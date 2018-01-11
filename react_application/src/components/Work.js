import React, { Component } from 'react';
import Admin from './Admin';
import Login from './Login';
import Footer from './Footer';
import firebase from '../firebase';
import '../style/styles.css';

class Work extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      user: '',
      title: '',
      description: '',
      background: '',
      pageURL: '',
      github: '',
      cases: [],
      errormsg: '',
      loading: true,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    //Start listening on firebase auth
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({user: user})
        console.log(user);
      }
      else {
        console.log('Ej inloggad');
        this.setState({user: ''})
      }
    })
    //Grabbing items from firebase
    const casesref = firebase.database().ref('cases');
    casesref.on('value', (snapshot) => {
      console.log(snapshot.val());
      let cases = snapshot.val();
      let newState = [];
      for (let item in cases) {
        newState.push({
          id: item,
          title: cases[item].title,
          description: cases[item].description,
          background: cases[item].background,
          pageURL: cases[item].pageURL,
          github: cases[item].github
        });
      }
      this.setState({
        cases: newState
      });
    });
  }
  //Function that register a new user with email and password
  // register = e => {
  //   e.preventDefault()
  //   firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  // }
  //Sign in with user using email and password
  signIn = () => {
    firebase.auth()
    .signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
      error.code === 'auth/invalid-email' ? this.setState({ errormsg: 'Fyll i en korrekt e-postadress!' })
      :
      null;
      error.code === 'auth/wrong-password' ? this.setState({ errormsg: 'Fel lösenord' })
      :
      null;
      error.code === 'auth/user-not-found' ? this.setState({ errormsg: 'Kunde inte hitta användaren' })
      :
      null;
    })
  }
  // Get value from inputfields and store it in the corresponding state
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  //Use the data that is stored in state and store in the database
  handleSubmit(e) {
    e.preventDefault();
    const casesRef = firebase.database().ref('cases');
    const item = {
      title: this.state.title,
      description: this.state.description,
      background: this.state.background,
      pageURL: this.state.pageURL,
      github: this.state.github
    }
    //Restore inputfields
    casesRef.push(item);
    this.setState({
      title: '',
      description: '',
      background: '',
      pageURL: '',
      github: ''
    });
  }
  //Delete inputs
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/cases/${itemId}`)
    itemRef.remove();
  }
  renderSpinner() {
    if (this.state.loading == false) {
      return null;
    }
    return (
      <span className="spinner" />
    );
  }
  handleImageLoaded() {
    this.setState({ loading: false })
  }
  handleImageError() {
    this.setState({ loading: 'Något gick fel'})
  }

 render(){
   const projects = this.state.cases.map((item) => {
     return (
      <div key={item.id} className="big-case" onLoad={this.handleImageLoaded.bind(this)} onError={this.handleImageError.bind(this)}>
       <img src={item.background} alt="img" />
       <div className="case-info">
        <div className="case-text">
         <h3>{item.title}</h3>
         <p>{item.description}</p>
        </div>
        <div className="button-wrapper">
        {item.pageURL ?
          <a href={item.pageURL} target="_blank">
           <div className="btn-round">
            <i className="fa fa-eye" aria-hidden="true"></i>
           </div>
          </a>
         :
          null
        }
        {item.github ?
          <a href={item.github} target="_blank">
           <div className="btn-round">
            <i className="fa fa-github" aria-hidden="true"></i>
           </div>
          </a>
         :
          null
        }
         {this.state.user && this.state.user.email ?
          <button className="btn-round" onClick={() => this.removeItem(item.id)}><i className="fa fa-trash" aria-hidden="true"></i></button>
          :
          null
         }
        </div>
      </div>
     </div>
     )
   })
   return(
    <section className="work-page">
      <div className="hero">
        <h1>Portfolio</h1>
      </div>
      <div className="page-wrapper">
        <h2>Några projekt som jag jobbat med.</h2>
        <div className="cases">
          {this.renderSpinner()}

          { projects }
        </div>
      </div>
      {this.state.user && this.state.user.email ?
      <Admin
        title={this.state.title}
        description={this.state.description}
        background={this.state.background}
        pageURL={this.state.pageURL}
        github={this.state.github}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
      :
      <Login
        handleChange={this.handleChange}
        signIn={this.signIn}
        register={this.register}
        email={this.email}
        password={this.password}
        errormsg={ this.state.errormsg }
      />
      }
      <Footer />
    </section>
  );
 }
}

export default Work;
