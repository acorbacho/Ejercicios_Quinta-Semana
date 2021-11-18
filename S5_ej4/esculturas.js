function esculturas(nombre, material, epoca) {
    /**
     * Nombre de la escultura.
     * @type {string}
     */
    var nombre_escultura = nombre
    /**
     * Material de la escultura.
     * @type {string}
     */
    var material_escultura = material
    /**
     * Época o corriente en la que se creó la escultura.
     * @type {string}
     */
    var epoca_escultura = epoca
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
     * Función objeto de esculturas.
     * @param {string} material - Material de la escultura.
     * @param {number} epoca - Año de creación.
     */
    var Esculturas = function (material, epoca) {
        this.material = material
        this.epoca = epoca
        this.attr_esculturas = function () {
            salida(this.nombre + ', ' + this.material + ', ' + this.epoca)
        }
    }

    for (id in Arte.prototype) {
        Esculturas.prototype[id] = Arte.prototype[id]
    }
    /**
     * Almacena el objeto creado a partir de "Esculturas".
     * @type {object}
     */
    var esculturas = new Esculturas(material_escultura, epoca_escultura)

    esculturas.nombre = nombre_escultura

    esculturas.alabarObra()
    esculturas.attr_esculturas()
}