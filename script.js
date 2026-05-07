function login(){

let username =
document.getElementById("username").value;

let password =
document.getElementById("password").value;

let message =
document.getElementById("message");

if(username === "" || password === ""){

message.innerHTML =
"Please fill all fields";

message.style.color = "red";
}

else if(username === "admin"
&& password === "1234"){

message.innerHTML =
"Login Successful";

message.style.color = "green";
}

else{

message.innerHTML =
"Invalid Username or Password";

message.style.color = "red";
}

}
