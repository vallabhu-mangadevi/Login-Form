function togglePassword(){

  let pass = document.getElementById("password");
  let eye = document.getElementById("eye");

  if(pass.type === "password"){
    pass.type = "text";
    eye.innerHTML = "🙈";   // eye OFF
  }else{
    pass.type = "password";
    eye.innerHTML = "👁️";   // eye ON
  }
}

function login(){

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let message = document.getElementById("message");

  let usernamePattern = /^[a-zA-Z0-9]+$/;

  // strong password rule
  let passwordPattern = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%*?&]).{6,}$/;

  if(username === "" || password === ""){
    message.innerHTML = "PLEASE FILL ALL FIELDS";
    message.style.color = "red";
  }

  else if(!usernamePattern.test(username)){
    message.innerHTML = "INVALID USERNAME";
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
