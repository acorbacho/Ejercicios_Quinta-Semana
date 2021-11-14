function comprobador(valor_inicial, valor_comprobar) {
    valor_aleatorio = valor_inicial
    valor_introducido = valor_comprobar
    if (valor_aleatorio === valor_introducido) {
        salida("Has acertado.")
    }
    else if (isNaN(valor_introducido)) {
        salida("No es un número")
    }
    else {
        if (valor_aleatorio > valor_introducido) {
            salida("Has fallado. El valor es mayor que " + valor_introducido + ".")
        }
        else {
            salida("Has fallado. El valor es menor que " + valor_introducido + ".")
        }
    }
}