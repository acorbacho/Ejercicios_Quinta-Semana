/**
 * Analiza una cantidad numerica de dinero, devolviendo la cantidad más optima de billetes de cada tipo.
 * @param {number} cantidad_dinero - Cantidad de dinero pedida por el usuario.
 * @returns {string} - Billetes de cada tipo.
 */
function cajero(cantidad_dinero) {
    /**
     * Dinero a contar.
     * @type {number}
     */
    var cantidad = cantidad_dinero
    /**
     * Cantidad de billetes de 200€.
     * @type {number}
     */
    var billetes200 = 0
    /**
     * Cantidad de billetes de 100€.
     * @type {number}
     */
    var billetes100 = 0
    /**
     * Cantidad de billetes de 50€.
     * @type {number}
     */
    var billetes50 = 0
    /**
     * Cantidad de billetes de 20€.
     * @type {number}
     */
    var billetes20 = 0
    /**
     * Cantidad de billetes de 10€.
     * @type {number}
     */
    var billetes10 = 0
    /**
     * Cantidad de billetes de 5€.
     * @type {number}
     */
    var billetes5 = 0

    if (cantidad >= 200) {
        billetes200 = Math.trunc(cantidad / 200)
        cantidad = cantidad - (200 * billetes200)
    }
    if (cantidad >= 100) {
        billetes100 = Math.trunc(cantidad / 100)
        cantidad = cantidad - (100 * billetes100)
    }
    if (cantidad >= 50) {
        billetes50 = Math.trunc(cantidad / 50)
        cantidad = cantidad - (50 * billetes50)
    }
    if (cantidad >= 20) {
        billetes20 = Math.trunc(cantidad / 20)
        cantidad = cantidad - (20 * billetes20)
    }
    if (cantidad >= 10) {
        billetes10 = Math.trunc(cantidad / 10)
        cantidad = cantidad - (10 * billetes10)
    }
    if (cantidad >= 5) {
        billetes5 = Math.trunc(cantidad / 5)
        cantidad = cantidad - (5 * billetes5)
    }
    return billetes200 + ' billetes de 200 retirados.\n' + billetes100 +
        ' billetes de 100 retirados.\n' + billetes50 + ' billetes de 50 retirados.\n'
        + billetes20 + ' billetes de 20 retirados.\n' + billetes10 + ' billetes de 10 retirados.\n'
        + billetes5 + ' billetes de 5 retirados.'
}
