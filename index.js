// No cambies los nombres de las funciones.

function minutosASegundos(minutos) {
    // Crea una función que tome un número como argumento, incremente el número en +1 y devuelva el resultado.
    // Tu código:
    return minutos * 60;
}

function triArea(base, altura) {
    // Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
    // Ayuda: El área de un triángulo es: (base * altura) / 2
    // Tu código:
    return base * altura / 2;
}

function menorACien(num1, num2) {
    // Dados dos números, devuelve true si la suma de ambos números es menor que 100. 
    // De lo contrario, devuelve falso.
    // Tu código:
    return num1 + num2 < 100;
}

function divisibleEnCinco(numero) {
    // Crea una función que devuelva true si un número entero es divisible por 5, y false en caso contrario.
    // Tu código:
    return numero % 5 === 0;
}

function comparaCaracteres(str1, str2) {
    // Cree una función que tome dos strings como argumentos y devuelva true o false
    // dependiendo de si el número total de caracteres en la primera cadena es igual al número
    // total de caracteres en la segunda cadena.
    // Tu código:
    return str1.length === str2.length; 
}

function buscaIndice(array, elemento) {
    // Cree una función que encuentre y devuelva el índice de un elemento dado dentro de un array.
    // Si el elemento no se encuentra en dentro del array devuelve -1.
    // Tu código:
    // return array.indexOf(item);
    for(var i = 0; i < array.length; i++){
		if(array[i] === elemento) return i;
	}
	return -1;
}

function contiene(array, numero) {
    // Escriba una función para verificar si un array contiene un número particular.
    // Si el numero se encuentra devuelve true, de lo contrario devuelve false.
    // Tu código:
    // return array.includes(numero)
    for (var i = 0; i < array.length; i++){
		if (array[i] === numero){
			return true;
		}
	}
	return false;
}

function ultimaLetraEsH(string) {
    // Crea una función que tome un string (un nombre aleatorio). 
    // Si el último carácter del nombre es una "h", devuelve true, de lo contrario devuelve false.
    // Tu código:
    // return string[string.length - 1] === 'h';
    if(string.charAt(string.length - 1) == 'h'){
		return true;
	} else {
		return false;
	}
}

function tieneEspacios(string) {
    // Cree una función que devuelva true si un string contiene espacios y false si no contiene.
    // Tu código:
    // return string.split(' ').length > 1;
    // return string.indexOf(' ') !== -1;
    return string.includes(' ');
}

function sumaNumeros(numero) {
    // Cree una función que tome un número como argumento.
    // Sume todos los números del 1 al número que pasó a la función. 
    // Por ejemplo, si el numero es 4, su función debería devolver 10 porque 1 + 2 + 3 + 4 = 10.
    // Su código:
    // if (num === 1) return 1;
    // return numero + sumaNumeros(numero - 1);
    let suma = 0;
    for (let i = 1; i <= numero; i++) {
      suma += i;
    }
    return suma;
}

function intercambioNumeros(numero) {
    // Escriba una función que tome un número de dos dígitos,
    //  y determine si es el mayor de dos intercambios de dígitos posibles.
    // Si al intercambiar los numeros obtenemos el mayor numero devolvemos false. sino devolvemos true
    // Si 27 es nuestro numero, deberíamos devolver false porque intercambiar los dígitos nos da 72, y 72 > 27.
    // Por otro lado, intercambiar 43 nos da 34, y 43 > 34.
    // Nota, si los digitos son iguales devolvemos true.
    // Su código:
    // return numero / 10 > numero % 10
    var nuevoNum = numero.toString();
	if (numero >= nuevoNum.charAt(1) + nuevoNum.charAt(0)) return true;
	return false; 
}

function filtraNumeros(array) {
    // Cree una función que tome un array de enteros y strings y devuelva una nueva matriz sin los strings.
    // Por ej: Si nuestro array es [1, 'Henry', 2] deberiamos devolver [1, 2]
    // Tu código:
    // return array.filter(n => typeof n === 'number');
    // return array.filter(num => Number.isInteger(num));
    var arrayFiltrado = [];
    for(var i = 0; i < array.length; i++) {
      if(typeof array[i] === "number") {
        arrayFiltrado.push(array[i]);
      }
    }
    return arrayFiltrado;
}

function repetirLetras(string) {
    // Cree una function que reciba un string como parametro y devuelva un string en donde cada letra se repita una vez.
    // Por ej si nuestro string es "hola" deberiamos devolver "hhoollaa"
    // Tu código:
    // return string.split('').map(l => l + l).join('');
    var stringFinal = [];
    for(var i = 0; i < string.length; i++){
        stringFinal.push(string[i]);
        stringFinal.push(string[i]);
    }
    return stringFinal.join('');
}

function contarVocales(string) {
    // Cree una función que tome un string como parametro y devuelva el número (suma) de vocales contenidas en ella.
    // Tu código:
    // return string.match(/[aeiou]/g).length;
    return string.split('').reduce(function(count, val){
        if (val.match(/[aeiuo]/)) {
          count++;
        }
        return count;
      },0);
}

function numeroSimetrico(num) {
    // Cree una función que tome un número como argumento 
    // y devuelva true o false dependiendo de si el número es simétrico o no. 
    // Un número es simétrico cuando es igual a su reverso.
    // // Tu código:
    const str = String(num);
    return str.split('').reverse().join('') === str;
}

function indexPrimeraVocal(string) {
    // Crea una funcion que tome un string como argumento
    // Y devuelva en el index de la primera vocal.
    // Tu código:
    let array = string.toLowerCase().split('')
	let vocales = ['a','e','i','o','u']
	for (let i = 0; i < array.length; i++) {
		if(vocales.indexOf(array[i]) !== -1){
			return i
		}
	}
}

function promedioEsEntero(array) {
    // Cree una función que tome un array como argumento y devuelva true o false 
    // dependiendo de si el promedio de todos los elementos del array es un número entero o no.
    // Tu código:
    const sum = array.reduce((total, num) => total + num, 0);
  
    return Number.isInteger(sum / array.length);
}

function repetirCaracteres() {
    // Crea una function llamada 'magic' que reciba un array de numeros enteros como parametro ( ej: [1, 2, 3, 4] )
    // Esta funcion tiene que encontrarse en el prototype del Objeto String.
    // este metodo tiene que devolver el string con los caracteres repetidos de acuerdo al numero del array.
    // Por ej: 'henry'.magic([1,2,3]) = 'heennnry'
    // En ese caso el primer caracter se repite una vez, el segundo 2 veces y el tercero 3.
    // Tu código:
    String.prototype.magic = function(arr) {
        let newArr = this.split('');
        let result;
        let total = newArr.map( (el, i) => {
            let repNum = arr[i] || 1
            result = el.repeat(repNum)
            return result

        })
        return total.join('');
    };
}



module.exports = {
    minutosASegundos,
    triArea,
    menorACien,
    divisibleEnCinco,
    comparaCaracteres,
    buscaIndice,
    contiene,
    ultimaLetraEsH,
    tieneEspacios,
    sumaNumeros,
    intercambioNumeros,
    filtraNumeros,
    repetirLetras,
    contarVocales,
    numeroSimetrico,
    indexPrimeraVocal,
    promedioEsEntero,
    repetirCaracteres
  };