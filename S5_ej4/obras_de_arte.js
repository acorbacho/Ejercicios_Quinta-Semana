/**
 * Función que engloba diversas funciones objeto.
 */
function obras_de_arte() {
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
     * Variable que almacena un objeto nuevo creado con 'Cine'.
     * @type {object}
     */
    var cine = new Cine('1h 43m', 'terror')
    /**
     * Variable que almacena un objeto nuevo creado con 'Esculturas'.
     * @type {object}
     */
    var esculturas = new Esculturas('Piedra caliza', 'Siglo XVI')
    /**
     * Variable que almacena un objeto nuevo creado con 'Pintura'.
     * @type {object}
     */
    var pintura = new Pintura('Velazquez', 'Pintura histórica')
    /**
     * Variable que almacena un objeto nuevo creado con 'Teatro'.
     * @type {object}
     */
    var teatro = new Teatro('2h 15m', 1920)
    cine.nombre = 'Saw'
    esculturas.nombre = 'Miguel Angelo'
    pintura.nombre = 'Las Meninas'
    teatro.nombre = 'Luces de bohemia'
    cine.alabarObra()
    cine.attr_cine()
    esculturas.attr_esculturas()
    pintura.attr_pintura()
    teatro.attr_teatro()
}