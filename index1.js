function addUser()
{
   var user = document.getElementById("User").value 
   var pw = document.getElementById("PW").value

   localStorage.setItem("pw", pw)
   localStorage.setItem("user", user)
   window.location = "index2.html"
}