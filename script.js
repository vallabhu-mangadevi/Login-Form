function togglePassword(){
  let pass = document.getElementById("password");

  if(pass.type === "password"){
    pass.type = "text";
  }else{
    pass.type = "password";
  }
}

// live password hint
document.getElementById("password").addEventListener("input", function(){

  let value = this.value;
  let hint = document.getElementById("hint");

  let caps = /[A-Z]/.test(value);
  let small = /[a-z]/.test(value);
  let num = /[0-9]/.test(value);
  let sym = /[@$!%*?&]/.test(value);
  let len = value.length >= 6;

  hint.innerHTML =
    `Caps: ${caps ? "✔️" : "✖️"} |
     Small: ${small ? "✔️" : "✖️"} |
     Number: ${num ? "✔️" : "✖️"} |
     Symbol: ${sym ? "✔️" : "✖️"} |
     Length: ${len ? "✔️" : "✖️"}`;
});

function login(){

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let message = document.getElementById("message");

  let usernamePattern = /^[a-zA-Z0-9]+$/;
  let passwordPattern = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%*?&]).{6,}$/;

  if(username === "" || password === ""){
    message.innerHTML = "PLEASE FILL ALL FIELDS";
    message.style.color = "red";
  }

  else if(!usernamePattern.test(username)){
    message.innerHTML = "USERNAME ONLY LETTERS & NUMBERS";
    message.style.color = "red";
  }

  else if(!passwordPattern.test(password)){
    message.innerHTML = "WEAK PASSWORD";
    message.style.color = "red";
  }

  else{
    message.innerHTML = "LOGIN SUCCESSFUL";
    message.style.color = "green";
  }
}
