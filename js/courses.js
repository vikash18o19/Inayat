const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDr47pbikNwJGQxiKmbSnM7QgMJOv3W130",
  authDomain: "inayat-backend.firebaseapp.com",
  databaseURL: "https://inayat-backend-default-rtdb.firebaseio.com",
  projectId: "inayat-backend",
  storageBucket: "inayat-backend.appspot.com",
  messagingSenderId: "248131097417",
  appId: "1:248131097417:web:ac2066b2578b7eefa20098",
  measurementId: "G-QK3T4RQR8Q",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const purchase = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      location.replace("https://rzp.io/l/HTcOcgOW");
    } else {
      console.log("not logged in");
      location.replace("log-register.html");
    }
  });
};
