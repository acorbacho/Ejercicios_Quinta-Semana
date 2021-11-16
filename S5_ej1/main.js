/**
 * Engloba todas las funciones del programa. Recibe los billetes, comprueba que sea una cantidad adecuada retorna los billetes de cada tipo.
 * También comprueba que el usuario quiera salir del programa.
 */
function main() {
    /**
     * Cantidad de billetes.
     * @type {*}
     */
    var cantidad_de_billetes
    while (cantidad_de_billetes !== "salir") {
        cantidad_de_billetes = entrada("Introduce la cantadidad a retirar. Para salir, escriba 'salir'.")
        if (cantidad_de_billetes === "salir") {
            alert("¡Hasta la próxima!")
            break
        } else {
            parseInt(cantidad_de_billetes, 10)
        }
        if (cantidad_de_billetes % 5 !== 0 | isNaN(cantidad_de_billetes)) {
            alert("Valor no válido, solo cantidades divisibles entre billetes de 5 a 200 euros.")
        } else {
            /**
             * Variable que almacena la cantidad de billetes que emite el cajero.
             * @type {string}
             */
            var billetes = cajero(cantidad_de_billetes)
            salida(billetes)
        }
    }
}
main()