function obras_de_arte() {
    var Arte = function () {
        Arte.prototype.nombre = ""
    }

    Arte.prototype.alabarObra = function () {
        salida(this.nombre + " es impresionante")
    }

    var Cine = function (duracion, genero) {
        this.duracion = duracion
        this.genero = genero
        this.attr_cine = function () {
            salida(this.nombre + ", " + this.duracion + ", " + this.genero)
        }

    }

    for (id in Arte.prototype) {
        Cine.prototype[id] = Arte.prototype[id]
    }

    var Esculturas = function (material, epoca) {
        this.material = material
        this.epoca = epoca
        this.attr_esculturas = function () {
            salida(this.nombre + ", " + this.material + ", " + this.epoca)
        }
    }

    for (id in Arte.prototype) {
        Esculturas.prototype[id] = Arte.prototype[id]
    }

    var Pintura = function (autor, estilo) {
        this.autor = autor
        this.estilo = estilo
        this.attr_pintura = function () {
            salida(this.nombre + ", " + this.autor + ", " + this.estilo)
        }
    }

    for (id in Arte.prototype) {
        Pintura.prototype[id] = Arte.prototype[id]
    }

    var Teatro = function (duracion, epoca) {
        this.duracion = duracion
        this.epoca = epoca
        this.attr_teatro = function () {
            salida(this.nombre + ", " + this.duracion + ", " + this.epoca)
        }
    }

    for (id in Arte.prototype) {
        Teatro.prototype[id] = Arte.prototype[id]
    }

    var cine = new Cine("1h 43m", "terror")
    var esculturas = new Esculturas("Piedra caliza", "Siglo XVI")
    var pintura = new Pintura("Velazquez", "Pintura histórica")
    var teatro = new Teatro("2h 15m", 1920)
    cine.nombre = "Saw"
    esculturas.nombre = "Miguel Angelo"
    pintura.nombre = "Las Meninas"
    teatro.nombre = "Luces de bohemia"
    cine.alabarObra()
    cine.attr_cine()
    esculturas.attr_esculturas()
    pintura.attr_pintura()
    teatro.attr_teatro()
}