/*Crea un programa que genere un número al azar (entre el 1 y el 100) y el
usuario debe de intentar acertar el número que se generó, con 5 intentos
como mucho. El programa debe avisar al usuario si es menor o mayor que el
que introdujo. Debe de preguntar al usuario al terminar, tanto si gana como
si pierde, si quiere volver a jugar.*/

function main() {
    var continuar = "si"
    while (continuar === "si") {
        var numero_usuario
        var numero_aleatorio = random()
        var contador = 5
        while (numero_usuario != numero_aleatorio && contador != 0) {
            contador--
            var numero_usuario = entrada("Introduce un número e intenta adivinarlo.")
            comprobador(numero_aleatorio, numero_usuario)
            if (numero_usuario != numero_aleatorio && contador === 0) {
                salida("Se te acabaron los intentos. Has perdido. El valor era " + numero_aleatorio + ".")
            } else if (numero_usuario != numero_aleatorio && contador > 0) {
                salida("Te quedan " + contador + " intentos.")
            }
        }
        var continuar = "no"
        var continuar = entrada("¿Deseas volver a jugar? Escribe 'si' para continuar, escribe otra cosa para salir.")
    }
}

main()