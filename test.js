const {
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
    sumaTodos
  } = require('./index.js');

const empresarios = [
    {
        nombre: 'Elon',
        apellido: 'Musk',
        libros: [
            {
                nombre: 'test1',
                autor: 'autor1'
            },
            {
                nombre: 'test2',
                autor: 'autor2'
            }
        ],
        mascotas: ['perro','gato']
    },
    {
        nombre: 'Larry',
        apellido: 'Page',
        libros: [
            {
                nombre: 'test3',
                autor: 'autor3'
            },
            {
                nombre: 'test4',
                autor: 'autor4'
            }
        ],
        mascotas: ['iguana','loro']
    },
    {
        nombre: 'Jeff',
        apellido: 'Bezos',
        libros: [
            {
                nombre: 'test5',
                autor: 'autor5'
            },
            {
                nombre: 'test6',
                autor: 'autor6'
            }
        ],
        mascotas: ['mapache','serpiente']
    }
]

let usuarios = {
    toni: {
        online: false
    },
    emi: {
        online: true
    },
    fran: {
        online: false
    },
    agus: {
        online: true
    }
};

let usuarios2 = {
    toni: {
        online: true
    },
    emi: {
        online: false
    },
    fran: {
        online: false
    },
    agus: {
        online: false
    }
};

describe('buscaIndice', function() {
    it('devolver el indice de un elemento dentro del array', function() {
        expect(buscaIndice([1,2,3,4,5,6,7,8,9,10], 4)).toBe(3);
        expect(buscaIndice([1,2,3,4,5,6,7,8,9,10], 11)).toBe(-1);
        expect(buscaIndice([1,2,3,4,5,6,7,8,9,10], 1)).toBe(0);
    });
});

describe('contiene', function() {
    it('verificar si un numero tiene un numero en particular', function() {
        expect(contiene([4,73,14,876,23,77,1], 876)).toBe(true);
        expect(contiene([34,65,14,3,87,91,436], 2)).toBe(false);
    });
});

describe('ultimaLetraEsH', function() {
    it('devolver true si el ultimo caracter del string es h, sino false', function() {
        expect(ultimaLetraEsH('este es un string que termina con h')).toBe(true);
        expect(ultimaLetraEsH('este es un string que termina con a')).toBe(false);
    });
});

describe('tieneEspacios', function() {
    it('devolver true si el string tiene espacios " ", sino devolver false', function() {
        expect(tieneEspacios('stringsinespacios')).toBe(false);
        expect(tieneEspacios('string con espacios')).toBe(true);
    });
});

describe('sumaNumeros', function() {
    it('devolver la suma de todos los nros que lo contienen', function() {
        expect(sumaNumeros(6)).toBe(21)
        expect(sumaNumeros(15)).toBe(120)
    })
})

describe('intercambioNumeros', function() {
    it('devolver true si el numero es el mayor sin intercambiarlos, devolver false si es mayor', function() {
        expect(intercambioNumeros(56)).toBe(false);
        expect(intercambioNumeros(93)).toBe(true);
        expect(intercambioNumeros(33)).toBe(true);
    });
});

describe('filtraNumeros', function() {
    it('devolver un array sin strings', function() {
        expect(filtraNumeros([1, 'Henry', 2])).toStrictEqual([1, 2]);
        expect(filtraNumeros([1,'Soy', 3, 'Henry', 2])).toStrictEqual([1, 3, 2]);
    });
});

describe('repetirLetras',function() {
    it('devolver un string con cada caracter repetido una vez', function() {
        expect(repetirLetras('hola')).toBe('hhoollaa');
        expect(repetirLetras('henry')).toBe('hheennrryy');
    });
});

describe('contarVocales', function() {
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

describe('indexPrimeraVocal', function() {
    it('devolver el index de la primera vocal', function() {
        expect(indexPrimeraVocal('string')).toBe(3);
        expect(indexPrimeraVocal('alo')).toBe(0);
        expect(indexPrimeraVocal('nnnnno')).toBe(5);
    });
});

describe('promedioEsEntero', function() {
    it('devolver true si el promedio de la suma de todos los numeros del array es entero', function() {
        expect(promedioEsEntero([5,3,6,8,77])).toBe(false);
        expect(promedioEsEntero([5,3,6,8,78])).toBe(true);
        expect(promedioEsEntero([2])).toBe(true);
        expect(promedioEsEntero([1,4])).toBe(false);
    });
});

describe('repetirCaracteres', function() {
    it('agregar metodo magic() al prototype de String y este repite la letra del string de acuerdo al numero del array y su posicion', function() {
        repetirCaracteres();
        const str = 'henry';
        expect(str.magic([1,2,3])).toBe('heennnry');
        expect(str.magic([3,2,2,3])).toBe('hhheennrrry');
    });
});

describe('buscaDestruye', function() {
    it('devolver el array sin los numeros que coinciden con los argumentos', function() {
        expect(buscaDestruye([1, 2, 3, 2, 3, 1], 2, 3)).toStrictEqual([1, 1])
        expect(buscaDestruye([1, 2, 3, 2, 3, 1, 1, 5, 2], 2, 3)).toStrictEqual([1, 1, 1, 5])
    });
});

describe('mergeArrays', function() {
    it('devolver un array, es el merge de los arrays que se pasaron por parametro', function() {
        expect(mergeArrays([1,2,3],[1,2,3])).toStrictEqual([1,2,3,1,2,3]);
        expect(mergeArrays([3,2,1],[3,2,1])).toStrictEqual([3,2,1,3,2,1]);
    });
});

describe('mergeExclusivo',function() {
    it('devolver un array, es el merge de los array que se pasaron por parametro, pero excluya aquellos numeros que estan en ambos arrays', function() {
        expect(mergeExclusivo([1, 2, 3, 4], [1, 2, 4, 5, 6])).toEqual([3, 5, 6]);
    });
});


describe('sumarElTipo', function() {
    it('devolver un objecto, con el nombre de la propiedad y la cantidad de veces que se repite', function() {
        const data = ['auto', 'auto', 'camion', 'camion', 'bici', 'moto', 'auto', 'bus', 'bici', 'moto', 'auto', 'bus', 'auto', 'camion', 'cuatriciclo'];
        expect(sumarElTipo(['auto', 'moto', 'auto'])).toEqual({auto: 2, moto: 1})
        expect(sumarElTipo(data)).toEqual({auto: 5, camion: 3, bici: 2, moto: 2, bus: 2, cuatriciclo: 1})
    })
})

describe('Clase', function() {
    describe('crearClaseEmprendedor', function() {
      it('should return a user constructor that correctly builds user objects', function() {
          const Emprendedor = crearClaseEmprendedor();
          const emprendedor = new Emprendedor('Elon', 'Musk', [{nombre: 'Lord of the Flies',autor: 'William Golding'}], ['perro','gato']);
          expect(emprendedor.nombre).toBe('Elon');
          expect(emprendedor.apellido).toBe('Musk');
          expect(emprendedor.libros).toEqual([{nombre: 'Lord of the Flies',autor: 'William Golding'}]);
          expect(emprendedor.mascotas).toEqual(['perro','gato']);
      });
      it('should get the number of pets', function() {
          const Emprendedor = crearClaseEmprendedor();
          const emprendedor = new Emprendedor('Elon', 'Musk', [{nombre: 'Lord of the Flies',autor: 'William Golding'}], ['perro','gato']);
          expect(emprendedor.getMascotas()).toBe(2);
      });
      it('should add a book with addBook', function() {
          const Emprendedor = crearClaseEmprendedor();
          const emprendedor = new Emprendedor('Elon', 'Musk', [{nombre: 'Lord of the Flies',autor: 'William Golding'}], ['perro','gato']);
          emprendedor.addBook('The Foundation Trilogy', 'Isaac Asimov');
          expect(emprendedor.libros[1]).toEqual({nombre: 'The Foundation Trilogy', autor: 'Isaac Asimov'});
      });
      it('should get all books name with getBooks', function() {
        const Emprendedor = crearClaseEmprendedor();
        const emprendedor = new Emprendedor('Elon', 'Musk', [{nombre: 'Lord of the Flies',autor: 'William Golding'}, {nombre: 'The Foundation Trilogy', autor: 'Isaac Asimov'}], ['perro','gato']);
        expect(emprendedor.getBooks()).toEqual(['Lord of the Flies','The Foundation Trilogy']);
      });
      it('should get all authors with getAuthors', function() {
        const Emprendedor = crearClaseEmprendedor();
        const emprendedor = new Emprendedor('Elon', 'Musk', [{nombre: 'Lord of the Flies',autor: 'William Golding'}, {nombre: 'The Foundation Trilogy', autor: 'Isaac Asimov'},{nombre: 'Yo, Robot', autor: 'Isaac Asimov'}], ['perro','gato']);
        expect(emprendedor.getAuthors()).toEqual(['William Golding', 'Isaac Asimov']);
      });
      it('should get full name with getFullName', function() {
        const Emprendedor = crearClaseEmprendedor();
        const emprendedor = new Emprendedor('Elon', 'Musk', [{nombre: 'Lord of the Flies',autor: 'William Golding'}], ['perro','gato']);
        const nombre = emprendedor.nombre;
        const apellido = emprendedor.apellido;
        expect(emprendedor.getFullName()).toBe(`${nombre} ${apellido}`);
      });
    });
  });

describe('actividadesEnComun', function() {
    it('should return an array with the mutual elements', function() {
        const person1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar'];
        const person2 = ['futbol', 'leer', 'programar', 'dormir'];
        expect(actividadesEnComun(person1,person2)).toEqual(['leer', 'dormir'])
    })
})

describe('Extra Credit', function() {
    describe('Mapear', function() {
        mapear();
        const numbers = [1, 2, 3, 4];
        it('should map', function() {
        expect(numbers.mapear(n => n * 2)).toEqual([2, 4, 6, 8]);
        })
        it('should map ok', function() {
        expect(numbers.mapear(n => n + 5)).toEqual([6, 7, 8, 9]);
        })
    })
});

describe('cuantosOnline', function() {
    it('should return the numbers of users online', function() {
        expect(cuantosOnline(usuarios)).toBe(2)
        expect(cuantosOnline(usuarios2)).toBe(1)
    })
})

describe('stringMasLarga', function() {
    it('should return the longest string', function() {
        expect(stringMasLarga('Ayer fui a pasear a una plaza')).toBe('pasear')
        expect(stringMasLarga('Me gusta mucho javascript')).toBe('javascript')
    })
})

describe('sumaTodos', function() {
    it('should return the sum of all numbers in range', function() {
        expect(sumaTodos([1,3])).toBe(6)
        expect(sumaTodos([4,1])).toBe(10)
    })
})