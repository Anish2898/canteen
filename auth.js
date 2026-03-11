const API = "http://localhost:5000/api/auth";


// REGISTER USER
async function registerUser(e){

e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

try{

const res = await fetch(API + "/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name,
email,
password
})

});

const data = await res.json();

alert(data.message || "Registration successful");

window.location.href = "login.html";

}

catch(err){

console.log(err);
alert("Registration failed");

}

}



// LOGIN USER
async function loginUser(e){

e.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

try{

const res = await fetch(API + "/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
email,
password
})

});

const data = await res.json();

if(res.ok){

localStorage.setItem("user", JSON.stringify(data.user));

alert("Login Successful");

window.location.href="index.html";

}

else{

alert(data.message);

}

}

catch(err){

console.log(err);
alert("Login failed");

}

}



// LOGOUT
function logout(){

localStorage.removeItem("user");

alert("Logged out");

window.location.href="login.html";

}