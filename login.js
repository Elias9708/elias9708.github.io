document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];
    
    var usuario = usuariosRegistrados.find(function(usuario) {
        return usuario.username === username && usuario.password === password;
    });

    if (usuario) {
        alert("Inicio de sesión exitoso. ¡Bienvenido, " + usuario.username + "!");
        window.location.href = "excel.html";

    } else {
        alert("Nombre de usuario o contraseña incorrectos. Por favor, inténtelo de nuevo o regístrese.");
    }
});