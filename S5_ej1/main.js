/*Se trata de un clásico problema de programación. Se necesita hacer un
cajero automático que de servicio a los usuarios de tal manera que, cuando
el usuario pida retirar dinero en efectivo, se muestre por pantalla la cantidad
que se retira y los billetes que se usaron, evitando que el usuario introduzca
una cifra que no pueda ser retirada del cajero (cualquiera que termine en
otra cantidad que no sea 0 o 5 al no existir billetes más pequeños que los de
5 euros). Las operaciones de retirada no pararán hasta que el usuario lo pida.

El cajero debe de ser lo más eficiente posible con los billetes que da al
usuario, por ejemplo:
El usuario desea retirar 380 euros y se le da:
1 billete de 200
1 billete de 100
1 billete de 50
1 billete de 20
1 billete de 10*/
/**
 * Engloba todas las funciones del programa. Recibe los billetes, comprueba que sea una cantidad adecuada retorna los billetes de cada tipo.
 * También comprueba que el usuario quiera salir del programa.
 */

function main() {
    var cantidad_de_billetes
    while (cantidad_de_billetes !== "salir") {
        var cantidad_de_billetes = entrada("Introduce la cantadidad a retirar. Para salir, escriba 'salir'.")
        if (cantidad_de_billetes === "salir") {
            alert("¡Hasta la próxima!")
            break
        }
        if (cantidad_de_billetes % 5 !== 0 | isNaN(cantidad_de_billetes)) {
            alert("Valor no válido, solo cantidades divisibles entre billetes de 5 a 200 euros.")
        } else {
            var billetes = cajero(cantidad_de_billetes)
            salida(billetes)
        }
    }
}
main()