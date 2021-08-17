
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCIAe70MAf6KgY9yEcYNk1-0I1VHWYCK_I",
    authDomain: "social-website-d5573.firebaseapp.com",
    projectId: "social-website-d5573",
    storageBucket: "social-website-d5573.appspot.com",
    messagingSenderId: "239021516069",
    appId: "1:239021516069:web:8f9ccbe11d504f0450a6cc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();



