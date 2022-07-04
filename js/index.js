const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDr47pbikNwJGQxiKmbSnM7QgMJOv3W130",
  authDomain: "inayat-backend.firebaseapp.com",
  databaseURL: "https://inayat-backend-default-rtdb.firebaseio.com",
  projectId: "inayat-backend",
  storageBucket: "inayat-backend.appspot.com",
  messagingSenderId: "248131097417",
  appId: "1:248131097417:web:ac2066b2578b7eefa20098",
  measurementId: "G-QK3T4RQR8Q"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();



firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      var username = user.email;
      console.log(username);
      
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

 

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
        var elem = document.getElementById("log_reg");
        console.log("user exits");
    
        elem.style.display='none';
        var ele = document.getElementById("log_out");
        
        // Appling styles on element
        ele.style.display='block';

    } else {
      // No user is signed in.
      console.log("not logged in")
    }
  });

const logout =()=>{
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log("signed out")
      }).catch((error) => {
        
        
        // An error happened.
        console.log(error.message);
      });

    var elem = document.getElementById("log_out");
    
    elem.style.display='none';

    var ele = document.getElementById("log_reg");

    ele.style.display='block';
}