const firebaseConfig = {
      apiKey: "AIzaSyC0-4h6Yqqp7_jcZ6ln_X7W7jznKd7P0Yk",
      authDomain: "test-fcb10.firebaseapp.com",
      databaseURL: "https://test-fcb10-default-rtdb.firebaseio.com",
      projectId: "test-fcb10",
      storageBucket: "test-fcb10.appspot.com",
      messagingSenderId: "1007268985836",
      appId: "1:1007268985836:web:d1bfdd8a775f07d3dcdec9"
    };

    firebase.initializeApp(firebaseConfig)

    var room_name =       localStorage.getItem("room_name")
    var un1 = localStorage.getItem("user")
    function message()
    {
      msg = document.getElementById("msg").value 
      firebase.database().ref(room_name).push({
            name:un1,
            message:msg,
            like:0

      })
      document.getElementById("msg").value = ""
    }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();



function logout()
{
      localStorage.removeItem("pw")
      localStorage.removeItem("user")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}