
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
const database = firebaseApp.database();

var provider = new firebase.auth.GoogleAuthProvider();

const signUp =()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    //console.log(email,password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
        var user = auth.currentUser;

        var database_ref = database.ref();

        var user_data ={
          email: email,
          full_name: name,
          contact_detail: contact,
          last_login: Date.now()
        }
        
        database_ref.child('users/'+user.uid).set(user_data)

        console.log("You are signed up");
        console.log(result);
        login();
    // ...
  })
  .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        alert(error.message);
  });
}

const signIn =()=> {
    const email = document.getElementById("userId").value;
    const password = document.getElementById("pword").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    console.log("You are signed in");
    console.log(result);
    location.replace("index.html");
  })
  .catch((error) => {
    console.log(error.code);
        console.log(error.message);
        alert(error.message);
  });
}

const googleSignIn=()=>{
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log("You are signed in");
    console.log("Welcome"+user);
    location.replace("index.html");
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}