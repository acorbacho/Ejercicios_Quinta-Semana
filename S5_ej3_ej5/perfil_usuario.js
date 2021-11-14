function perfil_usuario(nombre_introducido, apellidos_introducido, direccion_introducido, telefono_introducido, email_introducido) {
    var nombre_usuario = nombre_introducido
    var apellidos_usuario = apellidos_introducido
    var direccion_usuario = direccion_introducido
    var telefono_usuario = telefono_introducido
    var email_usuario = email_introducido

    var Perfil = function (nombre, apellidos, direccion, telefono, email) {
        this.nombre = nombre
        this.apellidos = apellidos
        this.direccion = direccion
        this.telefono = telefono
        this.email = email
    }

    var perfil = new Perfil(nombre_usuario, apellidos_usuario, direccion_usuario, telefono_usuario, email_usuario)

    var id_nombre = document.getElementById("nombre")
    var id_apellidos = document.getElementById("apellidos")
    var id_direccion = document.getElementById("direccion")
    var id_telefono = document.getElementById("telefono")
    var id_email = document.getElementById("email")

    id_nombre.innerHTML = nombre_usuario
    id_apellidos.innerHTML = apellidos_usuario
    id_direccion.innerHTML = direccion_usuario
    id_telefono.innerHTML = telefono_usuario
    id_email.innerHTML = email_usuario

    return perfil
}