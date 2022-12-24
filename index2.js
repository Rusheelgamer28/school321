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


var un = localStorage.getItem("user")
document.getElementById("welcome").innerHTML = "Hi User " + un

function addRoom()
{
      room_name = document.getElementById("room_name").value 

      firebase.database().ref("/").child(room_name).update({
            room : room_name,
            Username : un
      })
      localStorage.setItem("room_name", name1);
      window.location = "index2.html"
}





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
   
      console.log(Room_names)
document.getElementById("output").innerHTML += "<div  id="+Room_names+" onclick='add(this.id)' >"+Room_names+"</div>"
      
      });});}
getData();

function add(name1)
{
      console.log(name1)
      localStorage.setItem("room_name", name1);
      window.location = "index3.html"
}

function logout()
{
      localStorage.removeItem("pw")
      localStorage.removeItem("user")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}




