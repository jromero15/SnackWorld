const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    const mensaje = document.getElementById("mensaje");

    let usuarios = JSON.parse(
        localStorage.getItem("usuarios")
    ) || [];

    const usuario = usuarios.find(
        u =>
        u.correo === correo &&
        u.password === password
    );

    if(!usuario){

        mensaje.textContent = "Credenciales incorrectas";
        return;
    }

    localStorage.setItem(
        "usuarioActivo",
        JSON.stringify(usuario)
    );

    window.location.href = "dashboard.html";

});