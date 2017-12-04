import React, { Component } from 'react';
import firebase from 'firebase';

class Test extends Component {
 state = {
  bilder: '',
  pics: []
 }

 componentDidMount(){
  const storeRef = firebase.storage().ref('sweet_gifs');
  storeRef.on('value', (snapshot) => {
   console.log(snapshot.val());
   // let bilder = snapshot.val();
  //  let newState = [];
  //  for (let item in sweet_gifs) {
  //   newState.push({
  //    bilder: sweet_gifs[item].bilder
  //   });
  //  }
  //  this.setState({
  //   pics: newState
  //  });
  });
 }


 change(e) {
   this.setState({
     [e.target.name]: e.target.value
   });
 }

 upload(e){
  e.preventDefault();
  const storeRef = firebase.storage().ref('sweet_gifs')
  const item = {
   bilder: this.state.bilder
  }
 }


  render() {
    return (
      <div>
        <form onSubmit={this.upload}>
         <input type="file" name="bilder" onChange={this.change} value={this.bilder} />
        </form>
      </div>
    );
  }
}

export default Test;
