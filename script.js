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
"PLEASE FILL ALL FIELDS";

message.style.color = "red";
}

else if(!usernamePattern.test(username)){

message.innerHTML =
"USERNAME MUST CONTAIN ONLY LETTERS AND NUMBERS";

message.style.color = "red";
}

else if(!passwordPattern.test(password)){

message.innerHTML =
"PASSWORD MUST CONTAIN CAPITAL, SMALL, NUMBER AND SYMBOL";

message.style.color = "red";
}

else{

message.innerHTML =
"LOGIN SUCCESSFUL";

message.style.color = "green";
}

}
