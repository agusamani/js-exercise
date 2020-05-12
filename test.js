const {
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
  } = require('./index.js');

describe('minutosASegundos(min)', function() {
    it('transformar minutos a segundos', function() {
        expect(minutosASegundos(10)).toBe(600);
        expect(minutosASegundos(15)).toBe(900);
        expect(minutosASegundos(20)).toBe(1200);
    });
});

describe('triArea(base, altura)', function() {
    it('devolver el area de un triangulo', function() {
        expect(triArea(7, 2)).toBe(7);
        expect(triArea(2, 4)).toBe(4);
        expect(triArea(3, 5)).toBe(7.5);
    });
});

describe('menorACien(num1, num2)', function() {
    it('devuelve true si la suma es menor a 100, sino false', function() {
        expect(menorACien(49,50)).toBe(true);
        expect(menorACien(50,51)).toBe(false);
        expect(menorACien(50,50)).toBe(false);
    });
});

describe('divisibleEnCinco(numero)', function() {
    it('devolver true si en numero es divisible en 5, sino false', function() {
        expect(divisibleEnCinco(100)).toBe(true);
        expect(divisibleEnCinco(99)).toBe(false);
        expect(divisibleEnCinco(1)).toBe(false);
    });
});

describe('comparaCaracteres(str1, str2)', function() {
    it('devolver verdadero si la cantidad de caracteres son iguales', function() {
        expect(comparaCaracteres('hola', 'hello')).toBe(false);
        expect(comparaCaracteres('soyhenry', 'agustino')).toBe(true);
    });
});

describe('buscaIndice(array, elemento)', function() {
    it('devolver el indice de un elemento dentro del array', function() {
        expect(buscaIndice([1,2,3,4,5,6,7,8,9,10], 4)).toBe(3);
        expect(buscaIndice([1,2,3,4,5,6,7,8,9,10], 11)).toBe(-1);
        expect(buscaIndice([1,2,3,4,5,6,7,8,9,10], 1)).toBe(0);
    });
});

describe('contiene(array, numero)', function() {
    it('verificar si un numero tiene un numero en particular', function() {
        expect(contiene([4,73,14,876,23,77,1], 876)).toBe(true);
        expect(contiene([34,65,14,3,87,91,436], 2)).toBe(false);
    });
});

describe('ultimaLetraEsH(string)', function() {
    it('devolver true si el ultimo caracter del string es h, sino false', function() {
        expect(ultimaLetraEsH('este es un string que termina con h')).toBe(true);
        expect(ultimaLetraEsH('este es un string que termina con a')).toBe(false);
    });
});

describe('tieneEspacios(string)', function() {
    it('devolver true si el string tiene espacios " ", sino devolver false', function() {
        expect(tieneEspacios('stringsinespacios')).toBe(false);
        expect(tieneEspacios('string con espacios')).toBe(true);
    });
});

describe('sumaNumeros(numero)', function() {
    it('devolver la suma de todos los nros que lo contienen', function() {
        expect(sumaNumeros(6)).toBe(21)
        expect(sumaNumeros(15)).toBe(120)
    })
})

describe('intercambioNumeros(numero)', function() {
    it('devolver true si el numero es el mayor sin intercambiarlos, devolver false si es mayor', function() {
        expect(intercambioNumeros(56)).toBe(false);
        expect(intercambioNumeros(93)).toBe(true);
        expect(intercambioNumeros(33)).toBe(true);
    });
});

describe('filtraNumeros(array)', function() {
    it('devolver un array sin strings', function() {
        expect(filtraNumeros([1, 'Henry', 2])).toStrictEqual([1, 2]);
        expect(filtraNumeros([1,'Soy', 3, 'Henry', 2])).toStrictEqual([1, 3, 2]);
    });
});

describe('repetirLetras(string)',function() {
    it('devolver un string con cada caracter repetido una vez', function() {
        expect(repetirLetras('hola')).toBe('hhoollaa');
        expect(repetirLetras('henry')).toBe('hheennrryy');
    });
});

describe('contarVocales(string)', function() {
    it('devolver la cantidad de vocales que hay en el string', function() {
        expect(contarVocales('este es un string')).toBe(5);
        expect(contarVocales('hay que contar las vocales')).toBe(9);
    });
});

describe('numeroSimetrico(numero)', function() {
    it('devolver true si el numero es simetrico, de lo contrario false', function() {
        expect(numeroSimetrico(4224)).toBe(true);
        expect(numeroSimetrico(2341)).toBe(false);
    });
});

describe('indexPrimeraVocal(string)', function() {
    it('devolver el index de la primera vocal', function() {
        expect(indexPrimeraVocal('string')).toBe(3);
        expect(indexPrimeraVocal('alo')).toBe(0);
        expect(indexPrimeraVocal('nnnnno')).toBe(5);
    });
});

describe('promedioEsEntero(array)', function() {
    it('devolver true si el promedio de la suma de todos los numeros del array es entero', function() {
        expect(promedioEsEntero([5,3,6,8,77])).toBe(false);
        expect(promedioEsEntero([5,3,6,8,78])).toBe(true);
        expect(promedioEsEntero([2])).toBe(true);
        expect(promedioEsEntero([1,4])).toBe(false);
    });
});

describe('repetirCaracteres()', function() {
    it('agregar metodo magic() al prototype de String y este repite la letra del string de acuerdo al numero del array y su posicion', function() {
        repetirCaracteres();
        const str = 'henry';
        expect(str.magic([1,2,3])).toBe('heennnry');
        expect(str.magic([3,2,2,3])).toBe('hhheennrrry');
    });
});