//Firebase Importing

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBii0B-cJ97l112ws8Cgf-8qhlwD6_DnKg",
  authDomain: "get-in-touch-8b4c2.firebaseapp.com",
  databaseURL: "https://get-in-touch-8b4c2-default-rtdb.firebaseio.com",
  projectId: "get-in-touch-8b4c2",
  storageBucket: "get-in-touch-8b4c2.appspot.com",
  messagingSenderId: "5410069940",
  appId: "1:5410069940:web:09a1ed4d2bfe81d043e6e1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//References messages collection
var messagesRef = firebase.database().ref("Get In Touch");

//Listen for Form submit

document.getElementById("contact_form").addEventListener("submit", submitForm);

//submit form
function submitForm(e) {
  e.preventDefault();
  var name = getInputVal("contact_form_name");
  var email = getInputVal("contact_form_email");
  var subject = getInputVal("contact_form_subject");
  var phone = getInputVal("contact_form_phoneNumber");
  var message = getInputVal("contact_form_msg");
  //console.log(name);
  //save message
  saveMessage(name, email, subject, phone, message);
}

//Function to get Input value

function getInputVal(id) {
  return document.getElementById(id).value;
}

const delete_val= async()=> {
    document.getElementById("contact_form").reset();

    await setTimeout(function(){

      alert("Your response submitted successfully!");
    }, 500); 
  
}


//save messages to firebase

function saveMessage(name, email, subject, phone, message) {
  console.log(name, email, subject, phone, message);

  var newMessageRef = messagesRef.push();

  newMessageRef.set({
    name: name,
    email: email,
    subject: subject,
    phone: phone,
    message: message,
  });
  
  delete_val();
}




