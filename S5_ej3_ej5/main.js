/*Se requiere programar un perfil de usuario simple. El programa en su primera
ejecución deberá pedir los datos al usuario: nombre, apellidos, dirección,
teléfono, email… Una vez indicados, deberá desplegar un menú con
opciones para ver todos los datos y la capacidad de modificar individualmente cualquier dato. 
El perfil del usuario debe de ser un objeto llamado Perfil.*/
/*Utilizando el ejercicio 3, crea una etiqueta <h1> en html con cada atributo
del perfil y actualizalas cada vez que se modifique uno de los atributos.*/

function main() {
    var nombre = entrada("Introduce tu nombre.")
    var apellidos = entrada("Introduce tus apellidos.")
    var direccion = entrada("Introduce tu direccion.")
    var telefono = entrada("Introduce tu número de teléfono.")
    var email = entrada("Introduce tu correo electrónico.")
    var perfil_creado = perfil_usuario(nombre, apellidos, direccion, telefono, email)
    menu(perfil_creado)
}

main()