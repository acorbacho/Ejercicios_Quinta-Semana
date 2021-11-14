function menu(objeto_perfil) {
    var perfil = objeto_perfil
    var comando = ""
    while (comando !== 3) {
        var comando = entrada("Selecciona lo que deseas hacer:\n 1-Ver tus datos de usuario\n 2-Modificar tus datos de usuario\n 3-Salir")
        if (comando === 1) {
            salida("Nombre: " + perfil.nombre + "\nApellidos: " + perfil.apellidos + "\nDirección: "
                + perfil.direccion + "\nTeléfono: " + perfil.telefono + "\nEmail: " + perfil.email)
        }
        else if (comando === 2) {
            var nuevo_nombre = entrada("Introduce tu nombre.")
            var nuevo_apellidos = entrada("Introduce tus apellidos.")
            var nuevo_direccion = entrada("Introduce tu direccion.")
            var nuevo_telefono = entrada("Introduce tu número de teléfono.")
            var nuevo_email = entrada("Introduce tu correo electrónico.")

            perfil.nombre = nuevo_nombre
            perfil.apellidos = nuevo_apellidos
            perfil.direccion = nuevo_direccion
            perfil.telefono = nuevo_telefono
            perfil.email = nuevo_email

            var id_nombre = document.getElementById("nombre")
            var id_apellidos = document.getElementById("apellidos")
            var id_direccion = document.getElementById("direccion")
            var id_telefono = document.getElementById("telefono")
            var id_email = document.getElementById("email")

            id_nombre.innerHTML = nuevo_nombre
            id_apellidos.innerHTML = nuevo_apellidos
            id_direccion.innerHTML = nuevo_direccion
            id_telefono.innerHTML = nuevo_telefono
            id_email.innerHTML = nuevo_email
        }
        else if (comando == 3) {
            salida("¡Hasta luego!")
        }
        else {
            salida("No válido.")
        }
    }
}