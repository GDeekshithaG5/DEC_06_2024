// Initialize Firebase (ADD YOUR OWN DATA)
 // Initialize Firebase
 var firebaseConfig = {
    apiKey: "AIzaSyDme2TENpmsR6zWB9NFerqhhv0rwJmna4s",
    authDomain: "tjsvd-2f8fd.firebaseapp.com",
    databaseURL: "https://tjsvd-2f8fd-default-rtdb.firebaseio.com",
    projectId: "tjsvd-2f8fd",
    storageBucket: "tjsvd-2f8fd.firebasestorage.app",
    messagingSenderId: "498783159888",
    appId: "1:498783159888:web:41ba19eebdeed8e46b3355"
};
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
