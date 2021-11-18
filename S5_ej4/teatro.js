function teatro(nombre, duracion, epoca) {
    /**
     * Nombre de la obra.
     * @type {string}
     */
    var nombre_teatro = nombre
    /**
     * Duración de la obra en minutos.
     * @type {number}
     */
    var duracion_teatro = duracion
    /**
     * Época o corrienta en la que fue creada la obra.
     * @type {string}
     */
    var epoca_teatro = epoca
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
     * Función objeto de teatro.
     * @param {*} duracion - Duración de la obra.
     * @param {*} epoca - Año de la creación.
     */
    var Teatro = function (duracion, epoca) {
        this.duracion = duracion
        this.epoca = epoca
        this.attr_teatro = function () {
            salida(this.nombre + ', ' + this.duracion + ', ' + this.epoca)
        }
    }

    for (id in Arte.prototype) {
        Teatro.prototype[id] = Arte.prototype[id]
    }

    /**
     * Almacena el objeto creado a partir de "Teatro".
     * @type {object}
     */
    var teatro = new Teatro(duracion_teatro, epoca_teatro)

    teatro.nombre = nombre_teatro

    teatro.alabarObra()
    teatro.attr_teatro()
}