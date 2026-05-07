function login(){

let username =
document.getElementById("username").value;

let password =
document.getElementById("password").value;

let message =
document.getElementById("message");

let usernamePattern =
/^[a-zA-Z0-9]+$/;

let passwordPattern =
/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%*?&]).{6,}$/;

if(username === "" || password === ""){

message.innerHTML =
"Please fill all fields";

message.style.color = "red";
}

else if(!usernamePattern.test(username)){

message.innerHTML =
"Username should contain only letters and numbers";

message.style.color = "red";
}

else if(!passwordPattern.test(password)){

message.innerHTML =
"Password must contain capital, small, number and symbol";

message.style.color = "red";
}

else{

message.innerHTML =
"Login Successful";

message.style.color = "green";
}

}
