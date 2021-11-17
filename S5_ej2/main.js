/**
 * Función principal del programa que compara u número introducido por el usuario con otro generado aleatoriamente. Aquí se implementa un limitador de 5 intentos de comprobación.
 * También se le da la opción al usuario de repetir o parar el juego.
 */
function main() {
    /**
     * Variable que comprueba si el usuario quiere continuar con el programa.
     * @type {string}
     */
    var continuar = 'si'
    while (continuar === 'si') {
        /**
         * Almacena la entrada del usuario.
         * @type {*}
         */
        var numero_usuario
        /**
         * Almacena un número aleatorio.
         * @type {number}
         */
        var numero_aleatorio = random()
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
        continuar = 'no'
        continuar = entrada("¿Deseas volver a jugar? Escribe 'si' para continuar, escribe otra cosa para salir.")
    }
}

main()