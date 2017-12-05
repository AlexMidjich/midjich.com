import React, { Component } from 'react';
import '../style/styles.css';

class Login extends Component {

  // signIn = () => {
  //   firebase.auth()
  //   .signInWithEmailAndPassword(this.state.email, this.state.password)
  // }

 render(){
   return(
     <section className="login-page">
      <form className="login-inputs" onSubmit={this.props.register}>
        <input
         type="email"
         name="email"
         placeholder="E-post"
         onChange={this.props.handleChange}
         value={this.props.email}
         className="userinputs"
        />
        <input
         type="password"
         name="password"
         placeholder="Lösenord"
         onChange={this.props.handleChange}
         value={this.props.password}
         className="userinputs"
        />
      </form>
      <button onClick={this.props.signIn} className="btn-round"><i className="fa fa-sign-in" aria-hidden="true"></i></button>
     </section>
  );
 }
}

export default Login;
