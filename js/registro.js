const formulario = document.getElementById("registroForm");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;
    const confirmarPassword = document.getElementById("confirmarPassword").value;

    const mensaje = document.getElementById("mensaje");

    if(password !== confirmarPassword){

        mensaje.textContent = "Las contraseñas no coinciden";
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const existe = usuarios.find(
        usuario => usuario.correo === correo
    );

    if(existe){

        mensaje.textContent = "El correo ya existe";
        return;
    }

    usuarios.push({
        nombre,
        correo,
        password
    });

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );

    mensaje.textContent = "Usuario registrado correctamente";

    setTimeout(() => {

        window.location.href = "index.html";

    }, 1500);

});