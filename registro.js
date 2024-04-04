document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];
    
    // Verificar si el usuario ya existe
    var usuarioExistente = usuariosRegistrados.find(function(usuario) {
        return usuario.username === username;
    });

    if (usuarioExistente) {
        alert("El nombre de usuario ya está en uso.");
    } else {
        var nuevoUsuario = {
            nombres: nombres,
            apellidos: apellidos,
            email: email,
            username: username,
            password: password
        };

        usuariosRegistrados.push(nuevoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));
        
        alert("Registro exitoso.");
    }
});



