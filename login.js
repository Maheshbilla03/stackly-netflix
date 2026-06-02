document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let role = document.getElementById("role").value;
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = document.getElementById("message");

  if (role === "") {
    message.style.color = "red";
    message.innerText = "Please select your role";
    return;
  }

  if (email === "") {
    message.style.color = "red";
    message.innerText = "Please enter your email";
    return;
  }

  if (password === "") {
    message.style.color = "red";
    message.innerText = "Please enter your password";
    return;
  }

  if (password.length < 6) {
    message.style.color = "red";
    message.innerText = "Password must be at least 6 characters";
    return;
  }

  message.style.color = "lime";
  message.innerText = "Login successful!";
});