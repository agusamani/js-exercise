// No cambies los nombres de las funciones.

function buscaIndice(array, elemento) {
  // Cree una función que encuentre y devuelva el índice de un elemento dado dentro de un array.
  // Si el elemento no se encuentra en dentro del array devuelve -1.
  // Tu código:
  // return array.indexOf(item);
  for (var i = 0; i < array.length; i++) {
    if (array[i] === elemento) return i;
  }
  return -1;
}

function contiene(array, numero) {
  // Escriba una función para verificar si un array contiene un número particular.
  // Si el numero se encuentra devuelve true, de lo contrario devuelve false.
  // Tu código:
  // return array.includes(numero)
  for (var i = 0; i < array.length; i++) {
    if (array[i] === numero) {
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
  if (string.charAt(string.length - 1) == "h") {
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
  return string.includes(" ");
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
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
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
  for (var i = 0; i < string.length; i++) {
    stringFinal.push(string[i]);
    stringFinal.push(string[i]);
  }
  return stringFinal.join("");
}

function contarVocales(string) {
  // Cree una función que tome un string como parametro y devuelva el número (suma) de vocales contenidas en ella.
  // Tu código:
  // return string.match(/[aeiou]/g).length;
  return string.split("").reduce(function (count, val) {
    if (val.match(/[aeiuo]/)) {
      count++;
    }
    return count;
  }, 0);
}

function numeroSimetrico(num) {
  // Cree una función que tome un número como argumento
  // y devuelva true o false dependiendo de si el número es simétrico o no.
  // Un número es simétrico cuando es igual a su reverso.
  // // Tu código:
  const str = String(num);
  return str.split("").reverse().join("") === str;
}

function indexPrimeraVocal(string) {
  // Crea una funcion que tome un string como argumento
  // Y devuelva en el index de la primera vocal.
  // Tu código:
  let array = string.toLowerCase().split("");
  let vocales = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < array.length; i++) {
    if (vocales.indexOf(array[i]) !== -1) {
      return i;
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
  String.prototype.magic = function (arr) {
    let newArr = this.split("");
    let result;
    let total = newArr.map((el, i) => {
      let repNum = arr[i] || 1;
      result = el.repeat(repNum);
      return result;
    });
    return total.join("");
  };
}

function buscaDestruye(arr) {
  // Crea una funcion que tome un array de enteros como primer argumento, seguido de 1 o mas argumentos los cuales son enteros.
  // Esta funcion tiene que eliminar los numeros del array que coincidan con los argumentos siguientes.
  // Ayuda: debes usar la keyword 'arguments'

  const array = Object.values(arguments).slice(1);

  return arr.filter((x) => !array.find((y) => y === x));
}

function mergeArrays(arr1, arr2) {
  // Crea una funcion que tome dos arrays de enteros como parametros, que haga un merge de los arrays y devuelva ese array.
  // Ej: arr1 = [1, 2 ,3] arr2 = [4, 5, 6] => [1, 2, 3, 4, 5, 6]
  let mergeArr = [];

  for (let el of arr1) {
    mergeArr.push(el);
  }

  for (let el of arr2) {
    mergeArr.push(el);
  }

  return mergeArr;
}

function mergeExclusivo(arr1, arr2) {
  // Crea una funcion que tome dos arrays de enteros como parametros, que haga un merge de los arrays y devuelva ese array.
  // Se tienen que incluir solo los numeros que no se repiten en ambos arrays
  // Ej: arr1 = [1, 2, 3, 4] arr2 = [1, 2, 4, 5, 6] => [ 3, 5, 6]

  let mergeArr = [];

  for (let el of arr1) {
    if (!arr2.includes(el)) mergeArr.push(el);
  }

  for (let el of arr2) {
    if (!arr1.includes(el)) mergeArr.push(el);
  }

  return mergeArr;
}

const data = [
  "auto",
  "auto",
  "camion",
  "camion",
  "bici",
  "moto",
  "auto",
  "bus",
  "bici",
  "moto",
  "auto",
  "bus",
  "auto",
  "camion",
  "cuatriciclo",
];

function sumarElTipo(vehiculos) {
  // La funcion llamada 'sumarElTipo' recibe un array de strings como argumento
  // que contiene tipos de vehiculos y debe devolver un objeto con la cantidad
  // de veces que se repita cada vehiculo.
  // Ej:
  // sumarElTipo(['auto', 'moto', 'auto']); debe retornar {auto: 2, moto: 1}
  const transporte = vehiculos.reduce(function (obj, item) {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {});

  return transporte;
}
function crearClaseEmprendedor() {
  class Emprendedor {
    constructor(nombre, apellido, libros, mascotas) {
      // El constructor de la clase Emprendedor recibe nombre (string), apellido (string), libros (array de objetos), mascotas (array de strings)
      // Inicializar las propiedades de la persona con los valores recibidos como argumento

      // Tu código aca:
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascotas = mascotas;
    }

    getMascotas() {
      // El método 'getMascotas' debe retornar la cantidad de mascotas que tiene el emprendedor.
      // Ej:
      // Suponiendo que el emprendedor tiene estas mascotas: ['perro', 'gato']
      // emprendedor.getMascotas() debería devolver 2;

      // Tu código aca:
      return this.mascotas.length;
    }

    addBook(book, autor) {
      // El método 'addBook' recibe un string 'book' y un string 'autor' y debe agregar un objeto:
      // { nombre: book, autor: autor} al arreglo de amigos de la persona.
      // No debe retornar nada.

      // Tu código aca:
      this.libros.push({ nombre: book, autor: autor });
    }

    getBooks() {
      // El método 'getBooks' debe retornar un arreglo con sólo los nombres del arreglo de libros del emprendedor.
      // Ej:
      // Suponiendo que el emprendedor tiene estos libros: [{nombre: 'Lord of the Flies',autor: 'William Golding'}, {nombre: 'The Foundation Trilogy', autor: 'Isaac Asimov'}]
      // emprendedor.getBooks() debería devolver ['Lord of the Flies', 'The Foundation Trilogy']

      // Tu código aca:

      let nombreLibros = this.libros.map(function (libro) {
        return libro.nombre;
      });
      return nombreLibros;
    }

    getAuthors() {
      // El metodo 'getAuthors' debe retornar un arreglo con solo los nombres de los autores de los libros del emprendedor
      // En el caso de que exista un autor repetido, no deberia devolver el autor repetido
      // Suponiendo que el emprendedor tiene estos libros:
      // [ {nombre: 'The Foundation Trilogy', autor: 'Isaac Asimov'},{nombre: 'Yo, Robot', autor: 'Isaac Asimov'}]
      // emprendedor.getAuthors() debería devolver ['Isaac Asimov']

      // Tu código aca:
      let authors = [];
      this.libros.forEach((libro) => {
        if (!authors.includes(libro.autor)) {
          authors.push(libro.autor);
        }
      });
      return authors;
    }

    getFullName() {
      // El metodo getFullName debe retornar un string con el nombre y apellido del emprendedor.
      // ej:
      // Suponiendo que el emprendedor tiene: nombre: 'Elon' y apellido: 'Musk'
      // emprendedor.getFullName() deberia devolver 'Elon Musk'

      // Tu código aca:
      return `${this.nombre} ${this.apellido}`;
    }
  }

  return Emprendedor;
}

function actividadesEnComun(persona1, persona2) {
  // La funcion llamada 'actividadesEnComun' recibe como argumento dos arrays de strings llamados 'persona1' y 'persona2'
  // y debe devolver un array de strings con los actividades en comun entre cada array.
  // ej: persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar']
  //     persona2 = ['comer', 'dormir', 'futbol']
  // actividadesEnComun(persona1, persona2) => ['comer', 'dormir']

  // Tu código aca:
  let mutualAct = [];
  for (let i = 0; i < persona1.length; i++) {
    for (let j = 0; j < persona2.length; j++) {
      if (persona1[i] === persona2[j]) {
        mutualAct.push(persona1[i]);
      }
    }
  }
  return mutualAct;
}

function mapear() {
  // Escribi una funcion mapear en el prototipo del objeto global 'Array'
  // que recibe una funcion callback , que se ejecuta por cada elemento del array
  // mapear los elementos de ese array segun la funcion callback
  // Esta funcion tiene que devolver un array nuevo con los elementos mapeados.
  // MO USAR LA FUNCION MAP DE ARRAYS.
  // ej:
  // var numeros = [1, 2, 3, 4];
  // numeros.mapear(function(numero) {
  //   return numero + 1;
  // }) => [2, 3, 4, 5]

  // Tu código aca:

  Array.prototype.mapear = function (callback) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
      newArray[i] = callback(this[i], i);
    }

    return newArray;
  };
}

function cuantosOnline(usuarios) {
  // La funcion llamada "cuantosOnline" recibe como argumento un objeto 'usuarios', cada property de ese objeto es a su vez un objeto
  // cada usuario tiene una property 'online' que es un booleano.
  // deberia devolver la cantidad de usuarios con la property online igual a true.
  // ej:
  // let usuarios = {
  //     toni: {
  //         edad: 33,
  //         online: true
  //     },
  //     emi: {
  //         edad: 25,
  //         online: true
  //     },
  //     fran: {
  //         edad: 25,
  //         online: false
  //     },
  //     agus: {
  //         edad: 24,
  //         online: false
  //     }
  // };
  // cuantosOnline(usuarios) devuelve 2

  // Tu código aca:

  var counter = 0;
  for (var user in usuarios) {
    if (usuarios[user]["online"] === true) {
      counter++;
    }
    // change code above this line
  }
  return counter;
}

function stringMasLarga(str) {
  // La función llamada 'stringMasLarga', recibe como argumento un string con palabras
  // y debe devolver el string más largo que hay en ese string (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga('Ayer fui a pasear a una plaza'); debe retornar 'pasear'
  // stringMasLarga('Me gusta mucho javascript'); debe retornar 'javascript'

  // Tu código aca:

  let longsest = str.split(" ").sort((a, b) => b.length - a.length);
  return longsest[0];
}

function sumaTodos(array) {
  // La funcion llamada 'sumaTodos' recibe como argumento un array con dos numeros
  // y debe devolver la suma total entre todos los numeros dentro de ese rango
  // ej:
  // sumaTodos([1,3]) => 1 + 2 + 3 = 6
  // Nota: Los numeros no necesariamente estan ordenados de mayor a menor.

  // Tu código aca:

  var max = Math.max(...array);
  var min = Math.min(...array);
  var suma = 0;
  for (var i = min; i <= max; i++) {
    suma += i;
  }
  return suma;
}

module.exports = {
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
  repetirCaracteres,
  buscaDestruye,
  mergeArrays,
  mergeExclusivo,
  sumarElTipo,
  crearClaseEmprendedor,
  actividadesEnComun,
  mapear,
  cuantosOnline,
  stringMasLarga,
  sumaTodos,
};
