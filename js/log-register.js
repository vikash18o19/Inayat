
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




const signUp =()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    //console.log(email,password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
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