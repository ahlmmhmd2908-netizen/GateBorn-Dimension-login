let form = document.getElementById("login"); 
let welcome = document.getElementById("welcome")
form.onsubmit = function(event){
  event.preventDefault(); 
  
  let name = document.getElementById("name").value
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  
  if(name === ""|| email ==="" || password === ""){
    alert("⚠️❗❗Please fill in all fields before entering the GateBorn Dimension")
    return; 
  }
  
  else{
    form.style.display = "none"
    welcome.style.display = "block"
  }
  
}

function logout(){
  form.style.display = "block"
  welcome.style.display = "none"
}