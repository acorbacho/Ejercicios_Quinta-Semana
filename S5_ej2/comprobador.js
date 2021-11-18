/**
 * Función que comprueba la paridad de un número con otro.
 * @param {number} valor_inicial - Valor 1 a comparar.
 * @param {number} valor_comprobar - Valor 2 a comparar.
 */
function comprobador(valor_inicial, valor_comprobar) {
    /**
     * Almacena el parámetro 'valor_inicial'.
     * @type {number}
     */
    var valor_aleatorio = valor_inicial
    /**
     * Almacena el parámetro 'valor_comprobar'.
     * @type {number}
     */
    var valor_introducido = valor_comprobar

    if (valor_aleatorio === valor_introducido) {
        salida('Has acertado.')
    } else if (isNaN(valor_introducido)) {
        salida('No es un número')
    } else {
        if (valor_aleatorio > valor_introducido) {
            salida('Has fallado. El valor es mayor que ' + valor_introducido + '.')
        } else {
            salida('Has fallado. El valor es menor que ' + valor_introducido + '.')
        }
    }
}