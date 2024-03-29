// No cambies los nombres de las funciones.

function buscaIndice(array, elemento) {
  // Cree una función que encuentre y devuelva el índice de un elemento dado dentro de un array.
  // Si el elemento no se encuentra en dentro del array devuelve -1.
  // Tu código:
}

function contiene(array, numero) {
  // Escriba una función para verificar si un array contiene un número particular.
  // Si el numero se encuentra devuelve true, de lo contrario devuelve false.
  // Tu código:
}

function ultimaLetraEsH(string) {
  // Crea una función que tome un string (un nombre aleatorio).
  // Si el último carácter del nombre es una "h", devuelve true, de lo contrario devuelve false.
  // Tu código:
}

function tieneEspacios(string) {
  // Cree una función que devuelva true si un string contiene espacios y false si no contiene.
  // Tu código:
}

function sumaNumeros(numero) {
  // Cree una función que tome un número como argumento.
  // Sume todos los números del 1 al número que pasó a la función.
  // Por ejemplo, si el numero es 4, su función debería devolver 10 porque 1 + 2 + 3 + 4 = 10.
  // Su código:
}

function intercambioNumeros(numero) {
  // Escriba una función que tome un número de dos dígitos,
  //  y determine si es el mayor de dos intercambios de dígitos posibles.
  // Si al intercambiar los numeros obtenemos el mayor numero devolvemos false. sino devolvemos true
  // Si 27 es nuestro numero, deberíamos devolver false porque intercambiar los dígitos nos da 72, y 72 > 27.
  // Por otro lado, intercambiar 43 nos da 34, y 43 > 34.
  // Nota, si los digitos son iguales devolvemos true.
  // Su código:
}

function filtraNumeros(array) {
  // Cree una función que tome un array de enteros y strings y devuelva una nueva matriz sin los strings.
  // Por ej: Si nuestro array es [1, 'Henry', 2] deberiamos devolver [1, 2]
  // Tu código:
}

function repetirLetras(string) {
  // Cree una function que reciba un string como parametro y devuelva un string en donde cada letra se repita una vez.
  // Por ej si nuestro string es "hola" deberiamos devolver "hhoollaa"
  // Tu código:
}

function contarVocales(string) {
  // Cree una función que tome un string como parametro y devuelva el número (suma) de vocales contenidas en ella.
  // Tu código:
}

function numeroSimetrico(num) {
  // Cree una función que tome un número como argumento
  // y devuelva true o false dependiendo de si el número es simétrico o no.
  // Un número es simétrico cuando es igual a su reverso.
  // // Tu código:
}

function indexPrimeraVocal(string) {
  // Crea una funcion que tome un string como argumento
  // Y devuelva en el index de la primera vocal.
  // Tu código:
}

function promedioEsEntero(array) {
  // Cree una función que tome un array como argumento y devuelva true o false
  // dependiendo de si el promedio de todos los elementos del array es un número entero o no.
  // Tu código:
}

function repetirCaracteres() {
  // Crea una function llamada 'magic' que reciba un array de numeros enteros como parametro ( ej: [1, 2, 3, 4] )
  // Esta funcion tiene que encontrarse en el prototype del Objeto String.
  // este metodo tiene que devolver el string con los caracteres repetidos de acuerdo al numero del array.
  // Por ej: 'henry'.magic([1,2,3]) = 'heennnry'
  // En ese caso el primer caracter se repite una vez, el segundo 2 veces y el tercero 3.
  // Tu código:
}

function buscaDestruye(arr) {
  // Crea una funcion que tome un array de enteros como primer argumento, seguido de 1 o mas argumentos los cuales son enteros.
  // Esta funcion tiene que eliminar los numeros del array que coincidan con los argumentos siguientes.
  // Ayuda: debes usar la keyword 'arguments'
}

function mergeArrays(arr1, arr2) {
  // Crea una funcion que tome dos arrays de enteros como parametros, que haga un merge de los arrays y devuelva ese array.
  // Ej: arr1 = [1, 2 ,3] arr2 = [4, 5, 6] => [1, 2, 3, 4, 5, 6]
}

function mergeExclusivo(arr1, arr2) {
  // Crea una funcion que tome dos arrays de enteros como parametros, que haga un merge de los arrays y devuelva ese array.
  // Se tienen que incluir solo los numeros que no se repiten en ambos arrays
  // Ej: arr1 = [1, 2, 3, 4] arr2 = [1, 2, 4, 5, 6] => [ 3, 5, 6]
}

function sumarElTipo(vehiculos) {
  // La funcion llamada 'sumarElTipo' recibe un array de strings como argumento
  // que contiene tipos de vehiculos y debe devolver un objeto con la cantidad
  // de veces que se repita cada vehiculo.
  // Ej:
}
function crearClaseEmprendedor() {
  class Emprendedor {
    constructor(nombre, apellido, libros, mascotas) {
      // El constructor de la clase Emprendedor recibe nombre (string), apellido (string), libros (array de objetos), mascotas (array de strings)
      // Inicializar las propiedades de la persona con los valores recibidos como argumento
      // Tu código aca:
    }

    getMascotas() {
      // El método 'getMascotas' debe retornar la cantidad de mascotas que tiene el emprendedor.
      // Ej:
      // Suponiendo que el emprendedor tiene estas mascotas: ['perro', 'gato']
      // emprendedor.getMascotas() debería devolver 2;
      // Tu código aca:
    }

    addBook(book, autor) {
      // El método 'addBook' recibe un string 'book' y un string 'autor' y debe agregar un objeto:
      // { nombre: book, autor: autor} al arreglo de amigos de la persona.
      // No debe retornar nada.
      // Tu código aca:
    }

    getBooks() {
      // El método 'getBooks' debe retornar un arreglo con sólo los nombres del arreglo de libros del emprendedor.
      // Ej:
      // Suponiendo que el emprendedor tiene estos libros: [{nombre: 'Lord of the Flies',autor: 'William Golding'}, {nombre: 'The Foundation Trilogy', autor: 'Isaac Asimov'}]
      // emprendedor.getBooks() debería devolver ['Lord of the Flies', 'The Foundation Trilogy']
      // Tu código aca:
    }

    getAuthors() {
      // El metodo 'getAuthors' debe retornar un arreglo con solo los nombres de los autores de los libros del emprendedor
      // En el caso de que exista un autor repetido, no deberia devolver el autor repetido
      // Suponiendo que el emprendedor tiene estos libros:
      // [ {nombre: 'The Foundation Trilogy', autor: 'Isaac Asimov'},{nombre: 'Yo, Robot', autor: 'Isaac Asimov'}]
      // emprendedor.getAuthors() debería devolver ['Isaac Asimov']
      // Tu código aca:
    }

    getFullName() {
      // El metodo getFullName debe retornar un string con el nombre y apellido del emprendedor.
      // ej:
      // Suponiendo que el emprendedor tiene: nombre: 'Elon' y apellido: 'Musk'
      // emprendedor.getFullName() deberia devolver 'Elon Musk'
      // Tu código aca:
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
}

function stringMasLarga(str) {
  // La función llamada 'stringMasLarga', recibe como argumento un string con palabras
  // y debe devolver el string más largo que hay en ese string (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga('Ayer fui a pasear a una plaza'); debe retornar 'pasear'
  // stringMasLarga('Me gusta mucho javascript'); debe retornar 'javascript'
  // Tu código aca:
}

function sumaTodos(array) {
  // La funcion llamada 'sumaTodos' recibe como argumento un array con dos numeros
  // y debe devolver la suma total entre todos los numeros dentro de ese rango
  // ej:
  // sumaTodos([1,3]) => 1 + 2 + 3 = 6
  // Nota: Los numeros no necesariamente estan ordenados de mayor a menor.
  // Tu código aca:
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
