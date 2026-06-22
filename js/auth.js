// REGISTRO (RF1)
function register() {
  let user = document.getElementById("regUser").value;
  let pass = document.getElementById("regPass").value;

  if (!user || !pass) {
    alert("Completa todos los campos");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let exists = users.find(u => u.user === user);

  if (exists) {
    alert("El usuario ya existe");
    return;
  }

  users.push({ user, pass });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registro exitoso");
  window.location.href = "index.html";
}

// LOGIN (RF2)
function login() {
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let valid = users.find(u => u.user === user && u.pass === pass);

  if (!valid) {
    alert("Usuario o contraseña incorrectos");
    return;
  }

  localStorage.setItem("session", JSON.stringify(valid));

  window.location.href = "dashboard.html";
}