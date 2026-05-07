function togglePassword(){

  let pass = document.getElementById("password");
  let eye = document.getElementById("eye");

  if(pass.type === "password"){
    pass.type = "text";
    eye.innerHTML = "🙈";
  }else{
    pass.type = "password";
    eye.innerHTML = "👁️";
  }
}

function login(){

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let message = document.getElementById("message");

  let usernamePattern = /^[a-zA-Z0-9]+$/;
  let passwordPattern = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%*?&]).{6,}$/;

  // ALWAYS allow click
  console.log("Login button clicked");

  if(username === "" || password === ""){
    message.innerHTML = "PLEASE FILL ALL FIELDS";
    message.style.color = "red";
    return;
  }

  if(!usernamePattern.test(username)){
    message.innerHTML = "INVALID USERNAME";
    message.style.color = "red";
    return;
  }

  if(!passwordPattern.test(password)){
    message.innerHTML = "LOGIN SUCCESSFUL ✅";
    message.style.color = "red";
    return;
  }

  message.innerHTML = "WEAK PASSWORD ❌";
  message.style.color = "green";
}
