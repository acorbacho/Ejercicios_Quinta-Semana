/**
 * Menú de usuario para vista y edición de perfil.
 * @param {object} objeto_perfil - Perfil.
 */
function menu(objeto_perfil) {
    /**
     * Recibe el parámetro 'objeto_perfil' guardando el perfil de usuario en la variable.
     * @type {object}
     */
    var perfil = objeto_perfil
    /**
     * Guarda la selección del usuario.
     * @type {*}
     */
    var comando

    while (comando !== 3) {
        comando = entrada('Selecciona lo que deseas hacer:\n 1-Ver tus datos de usuario\n 2-Modificar tus datos de usuario\n 3-Salir')
        parseInt(comando, 10)
        if (comando == 1) {
            salida('Nombre: ' + perfil.nombre + '\nApellidos: ' + perfil.apellidos + '\nDirección: '
                + perfil.direccion + '\nTeléfono: ' + perfil.telefono + '\nEmail: ' + perfil.email)
        } else if (comando == 2) {
            /**
             * Guarda en la variable el nuevo nombre de usuario que se recibe de una entrada.
             * @type {string}
             */
            var nuevo_nombre = entrada('Introduce tu nombre.')
            /**
             * Guarda en la variable el nuevo apellido de usuario que se recibe de una entrada.
             * @type {string}
             */
            var nuevo_apellidos = entrada('Introduce tus apellidos.')
            /**
             * Guarda en la variable la nueva dirección de usuario que se recibe de una entrada.
             * @type {string}
             */
            var nuevo_direccion = entrada('Introduce tu direccion.')
            /**
             * Guarda en la variable el nuevo teléfono de usuario que se recibe de una entrada.
             * @type {string}
             */
            var nuevo_telefono = entrada('Introduce tu número de teléfono.')
            /**
             * Guarda en la variable el nuevo email de usuario que se recibe de una entrada.
             * @type {string}
             */
            var nuevo_email = entrada('Introduce tu correo electrónico.')

            perfil.nombre = nuevo_nombre
            perfil.apellidos = nuevo_apellidos
            perfil.direccion = nuevo_direccion
            perfil.telefono = nuevo_telefono
            perfil.email = nuevo_email
            /**
             * Guarda una referencia 'id' a 'nombre' procendente del documento HTML.
             * @type {string}
             */
            var id_nombre = document.getElementById('nombre')
            /**
             * Guarda una referencia 'id' a 'apellidos' procendente del documento HTML.
             * @type {string}
             */
            var id_apellidos = document.getElementById('apellidos')
            /**
             * Guarda una referencia 'id' a 'direccion' procendente del documento HTML.
             * @type {string}
             */
            var id_direccion = document.getElementById('direccion')
            /**
             * Guarda una referencia 'id' a 'telefono' procendente del documento HTML.
             * @type {string}
             */
            var id_telefono = document.getElementById('telefono')
            /**
             * Guarda una referencia 'id' a 'email' procendente del documento HTML.
             * @type {string}
             */
            var id_email = document.getElementById('email')

            id_nombre.innerHTML = nuevo_nombre
            id_apellidos.innerHTML = nuevo_apellidos
            id_direccion.innerHTML = nuevo_direccion
            id_telefono.innerHTML = nuevo_telefono
            id_email.innerHTML = nuevo_email
        } else if (comando == 3) {
            salida('¡Hasta luego!')
        } else {
            salida('No válido.')
        }
    }
}