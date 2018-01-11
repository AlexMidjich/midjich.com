import React, { Component } from 'react';
import firebase from '../firebase';
import '../style/styles.css';

class Admin extends Component {

  //Function that signs out the user
  signOut = () => {
    firebase.auth().signOut();
  }

 render(){
   return(
     <section className="admin-page">
       <h1>Admin panel</h1>
       <button onClick={this.signOut} className="btn-round"><i className="fas fa-sign-out-alt" aria-hidden="true"></i></button>
       <div className="wrapper">
         <form onSubmit={this.props.handleSubmit} className="admin-inputs">
          <div>
           <input
             type="text"
             name="title"
             placeholder="Rubrik"
             onChange={this.props.handleChange}
             value={this.props.title}
           />
           <input
             type="text"
             name="background"
             placeholder="Bild url"
             onChange={this.props.handleChange}
             value={this.props.background}
            />
           <input
             type="text"
             name="pageURL"
             placeholder="Länk till hemsidan"
             onChange={this.props.handleChange}
             value={this.props.pageURL}
           />
           <input
             type="text"
             name="github"
             placeholder="Länk till Github"
             onChange={this.props.handleChange}
             value={this.props.github}
           />
           <button className="btn">Lägg till</button>
           </div>
           <div>
           <textarea
             name="description"
             rows="2"
             placeholder="Skriv kort om sidan..."
             onChange={this.props.handleChange}
             value={this.props.description}>
           </textarea>
           </div>
         </form>
       </div>
     </section>
  );
 }
}

export default Admin;
