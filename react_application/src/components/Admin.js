import React, { Component } from 'react';
import firebase from '../firebase';
import '../style/styles.css';

class Admin extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      description: '',
      cases: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
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
          description: cases[item].description
        });
      }
      this.setState({
        cases: newState
      });
    });
  }

  //Get value from inputfields and store it in the corresponding state
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
      description: this.state.description
    }
    //Restore inputfields
    casesRef.push(item);
    this.setState({
      title: '',
      description: ''
    });
  }
  //Delete inputs
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/cases/${itemId}`)
    itemRef.remove();
  }

 render(){
   const projects = this.state.cases.map((item) => {
     return (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <button onClick={() => this.removeItem(item.id)}>Ta bort</button>
      </div>
     )
   })
   return(
    <section className="admin-page">
      <h1>Admin panel</h1>
      <div className="admin-inputs">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Rubrik"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <textarea
            name="description"
            rows="2"
            placeholder="Skriv kort om sidan..."
            onChange={this.handleChange}
            value={this.state.description}>
          </textarea>
          <button>Lägg till</button>
        </form>
        { projects }
      </div>
    </section>
  );
 }
}

export default Admin;
