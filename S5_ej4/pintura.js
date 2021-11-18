function pintura(nombre, autor, estilo) {
    /**
     * Nombre de la pintura.
     * @type {string}
     */
    var nombre_pintura = nombre
    /**
     * Autor de la pintura.
     * @type {string}
     */
    var autor_pintura = autor
    /**
     * Estilo artístico de la pintura.
     * @type {string}
     */
    var estilo_pintura = estilo
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
     * Función objeto de pinturas.
     * @param {string} autor - Autor de la pintura.
     * @param {string} estilo - Estilo artístico.
     */
    var Pintura = function (autor, estilo) {
        this.autor = autor
        this.estilo = estilo
        this.attr_pintura = function () {
            salida(this.nombre + ', ' + this.autor + ', ' + this.estilo)
        }
    }

    for (id in Arte.prototype) {
        Pintura.prototype[id] = Arte.prototype[id]
    }
    /**
     * Almacena el objeto creado a partir de "Pintura".
     * @type {object}
     */
    var pintura = new Pintura(autor_pintura, estilo_pintura)

    pintura.nombre = nombre_pintura

    pintura.alabarObra()
    pintura.attr_pintura()
}