/**
 * Función que recoje los nombres de los atributos.
 * @param {string} nombre_introducido - Nombre
 * @param {string} apellidos_introducido - Apellidos
 * @param {string} direccion_introducido - Dirección
 * @param {string} telefono_introducido - Teléfono
 * @param {string} email_introducido - Email
 * @returns {object} - Perfil
 */
function perfil_usuario(nombre_introducido, apellidos_introducido, direccion_introducido, telefono_introducido, email_introducido) {
    /**
     * Alacena el parámetro nombre_introducido.
     * @type {string}
     */
    var nombre_usuario = nombre_introducido
    /**
     * Alacena el parámetro apellidos_introducido.
     * @type {string}
     */
    var apellidos_usuario = apellidos_introducido
    /**
     * Alacena el parámetro direccion_introducido.
     * @type {string}
     */
    var direccion_usuario = direccion_introducido
    /**
     * Alacena el parámetro telefono_introducido.
     * @type {string}
     */
    var telefono_usuario = telefono_introducido
    /**
     * Alacena el parámetro email_introducido.
     * @type {string}
     */
    var email_usuario = email_introducido
    /**
     * Función de creación de objeto 'Perfil'.
     * @param {string} nombre - Nombre
     * @param {string} apellidos - Apellidos
     * @param {string} direccion - Dirección
     * @param {string} telefono - Teléfono
     * @param {string} email - Email
     */

    var Perfil = function (nombre, apellidos, direccion, telefono, email) {
        this.nombre = nombre
        this.apellidos = apellidos
        this.direccion = direccion
        this.telefono = telefono
        this.email = email
    }
    /**
     * Almacena el perfil.
     * @type {object}
     */
    var perfil = new Perfil(nombre_usuario, apellidos_usuario, direccion_usuario, telefono_usuario, email_usuario)
    /**
     * Guarda una referencia 'id' a 'nombre' procendente del documento html.
     * @type {string}
     */
    var id_nombre = document.getElementById('nombre')
    /**
     * Guarda una referencia 'id' a 'apellidos' procendente del documento html.
     * @type {string}
     */
    var id_apellidos = document.getElementById('apellidos')
    /**
     * Guarda una referencia 'id' a 'direccion' procendente del documento html.
     * @type {string}
     */
    var id_direccion = document.getElementById('direccion')
    /**
     * Guarda una referencia 'id' a 'telefono' procendente del documento html.
     * @type {string}
     */
    var id_telefono = document.getElementById('telefono')
    /**
     * Guarda una referencia 'id' a 'email' procendente del documento html.
     * @type {string}
     */
    var id_email = document.getElementById('email')

    id_nombre.innerHTML = nombre_usuario
    id_apellidos.innerHTML = apellidos_usuario
    id_direccion.innerHTML = direccion_usuario
    id_telefono.innerHTML = telefono_usuario
    id_email.innerHTML = email_usuario

    return perfil
}