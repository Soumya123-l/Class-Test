
const firebaseConfig = {
      apiKey: "AIzaSyBoW2RCPH2G8EqIpG2sA4ELFHkMVxx1NkE",
      authDomain: "class-test-38496.firebaseapp.com",
      databaseURL: "https://class-test-38496-default-rtdb.firebaseio.com",
      projectId: "class-test-38496",
      storageBucket: "class-test-38496.appspot.com",
      messagingSenderId: "252985212094",
      appId: "1:252985212094:web:ed5283ca140badab52f2ef"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
