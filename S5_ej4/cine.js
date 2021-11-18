function cine(nombre, duracion, genero) {
    /**
     * Nombre de la obra.
     * @type {string}
     */
    var nombre_cine = nombre
    /**
     * Género de la obra.
     * @type {string}
     */
    var genero_cine = genero
    /**
     * Duración de la obra.
     * @type {number}
     */
    var duracion_cine = duracion
    /**
     * Función objeto padre.
     */
    var Arte = function () {
        Arte.prototype.nombre = ''
    }
    Arte.prototype.alabarObra = function () {
        salida(this.nombre + ' es impresionante')
    }
    /**
     * Función objeto de cine.
     * @param {string} duracion - Duración del film.
     * @param {number} genero - Género artístico.
     */
    var Cine = function (duracion, genero) {
        this.duracion = duracion
        this.genero = genero
        this.attr_cine = function () {
            salida(this.nombre + ', ' + this.duracion + ', ' + this.genero)
        }

    }

    for (id in Arte.prototype) {
        Cine.prototype[id] = Arte.prototype[id]
    }
    /**
     * Almacena el objeto creado a partir de "Cine".
     * @type {object}
     */
    var cine = new Cine(duracion_cine, genero_cine)

    cine.nombre = nombre_cine

    cine.alabarObra()
    cine.attr_cine()
}