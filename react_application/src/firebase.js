import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBr-ijwvsSPfWaoi39-inioo9VJiZSH2wg",
  authDomain: "midjich-com.firebaseapp.com",
  databaseURL: "https://midjich-com.firebaseio.com",
  projectId: "midjich-com",
  storageBucket: "",
  messagingSenderId: "181989321407"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export default firebase;
