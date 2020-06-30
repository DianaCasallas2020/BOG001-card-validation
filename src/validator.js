const validator = {

  isValid: cardNumber => {

    /* Es una expresión regular, valida que se ingresen numeros del 0 al 9. el signo  + es para que evalue si vienen
    más números dentro de la cadena, el test valida que la expresión !cardNumber, en este caso dice que si no hay
    numero o no se ingresa el numero retorne false */
    
    if (/[0-9]+/.test(!cardNumber) || cardNumber == "") return false;

    // Evento adgoritmo luhn
    
    let sumaTotal = 0,
        vPar = false; //Comienza en false por que el primer número es impar

    for (var n = cardNumber.length - 1; n >= 0; n--) { /* Obtiene el caracter del string, var n guarda cardNumber.lenght - 1.
                                                        para que comience desde el ultimo digito como el array al reves,*/

      var nCaracter = cardNumber.charAt(n), // Obtiene el valor del caracter del string
      
      nEntero = +nCaracter; // Convierte el caracter a un entero, con la expresión unary plus

      if (vPar && (nEntero *= 2) > 9)// Si la varible es false entonces no se cumple el resto de la condición
        nEntero -= 9; // y si vPar es true la codición se cumple y que el numero se multipleque x 2 y si en mayor a nueve entonces le reste nueve

      sumaTotal += nEntero;
      vPar = !vPar; // Está expresión unary dice que si vPar es false igual nofalse entonces es true
    }

    return (sumaTotal % 10) == 0;
  },

  // Enmascarado de numeros

  maskify: cardNumber => {

    let mSimbolo = '#';

    if (cardNumber.length >= 4) {

      let lDigito = cardNumber.slice(-4);

      let mTotal = mSimbolo.repeat(cardNumber.length - 4) + lDigito;

      return cardNumber = mTotal;

    } else {
      return cardNumber;
    }
  }
};

export default validator;

