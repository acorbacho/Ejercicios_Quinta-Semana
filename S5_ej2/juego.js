function juego(numero_aleatorio_param) {
    /**
     * Almacena el número de usuario.
     * @type {number}
     */
    var numero_usuario
    /**
     * Almacena el número de aleatorio.
     * @type {number}
     */
    var numero_aleatorio = numero_aleatorio_param
    /**
     * Contador de intentos.
     * @type {number}
     */
    var contador = 5

    while (numero_usuario != numero_aleatorio && contador != 0) {
        contador--
        numero_usuario = entrada('Introduce un número e intenta adivinarlo.')
        parseInt(numero_usuario)
        comprobador(numero_aleatorio, numero_usuario)

        if (numero_usuario != numero_aleatorio && contador === 0) {
            salida('Se te acabaron los intentos. Has perdido. El valor era ' + numero_aleatorio + '.')
        } else if (numero_usuario != numero_aleatorio && contador > 0) {
            salida('Te quedan ' + contador + ' intentos.')
        }
    }
}