/**
 * Función principal del programa de creación de perfiles.
 * Se recogen datos de usuario y se ejecutan otras funciones.
 */
function main() {
    /**
     * Nombre.
     * @type {string}
     */
    var nombre = entrada('Introduce tu nombre.')
    /**
     * Apellidos.
     * @type {string}
     */
    var apellidos = entrada('Introduce tus apellidos.')
    /**
     * Dirección.
     * @type {string}
     */
    var direccion = entrada('Introduce tu direccion.')
    /**
     * Teléfono.
     * @type {string}
     */
    var telefono = entrada('Introduce tu número de teléfono.')
    /**
     * Email.
     * @type {string}
     */
    var email = entrada('Introduce tu correo electrónico.')
    /**
     * Almacena el perfil de usuario.
     * @type {object}
     */
    var perfil_creado = perfil_usuario(nombre, apellidos, direccion, telefono, email)
    menu(perfil_creado)
}

main()