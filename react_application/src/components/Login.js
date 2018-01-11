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
      <div className="login-fields">
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
        <button onClick={this.props.signIn} className="btn-round"><i className="fas fa-sign-in-alt" aria-hidden="true"></i></button>
      </div>
      <div className="error-field">
        <p>{ this.props.errormsg }</p>
      </div>
     </section>
  );
 }
}

export default Login;
