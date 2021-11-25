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
         * Almacena un número aleatorio.
         * @type {number}
         */
        var numero_aleatorio = random(0, 100)
        juego(numero_aleatorio)
        continuar = 'no'
        continuar = entrada("¿Deseas volver a jugar? Escribe 'si' para continuar, escribe otra cosa para salir.")
    }
}
main()