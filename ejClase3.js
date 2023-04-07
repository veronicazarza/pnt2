/** 
1. Crear un array de objetos con información de personajes de Los Simpsons, cada
objeto debe contener el nombre, la edad y el rol del personaje. Utilizar el método
filter para obtener un nuevo array que contenga solamente los personajes
menores de 18 años.
**/ 

const simpsons = [
    {
        nombre: 'Marge',
        edad: 36,
        rol: 'Madre'
    },
    {
        nombre: 'Homero',
        edad: 38,
        rol: 'Padre'
    },
    {
        nombre: 'Bart',
        edad: 10,
        rol: 'Hijo'
    },
    {
        nombre: 'Lisa',
        edad: 8,
        rol: 'Hijo'
    },
    {
        nombre: 'Maggie',
        edad: 1,
        rol: 'Hija'
    }
];

let miembrosMenores = simpsons.filter(simpson => simpson.edad < 18);
/**
 2.Utilizar el método reduce para sumar las edades de todos los personajes del array
creado en el Ejercicio 1. Mostrar el resultado en la consola.
 */
let totalEdades = simpsons.reduce((suma,simpson) => suma + simpson.edad,0);
console.log(totalEdades);
/**
 3.Utilizar el método map y una función arrow para crear un nuevo array que contenga
solamente los nombres de los personajes del array del Ejercicio 1. Mostrar el nuevo
array en la consola.
 */
let nombres = simpsons.map(simpson => simpson.nombre);
console.log(nombres);
/**
 4.Utilizar el método map y destructuring para crear un nuevo array a partir del array
del Ejercicio 1, en el cual el rol de los personajes menores de edad sea cambiado a
"Estudiante". Mostrar el nuevo array en la consola.
 */
/**
 5.Crear un nuevo array de objetos con más personajes de Los Simpsons. Utilizar el
operador spread para combinar ambos arrays de personajes en un nuevo array.
Mostrar el array resultante en la consola.
 */
const amigosSimpsons = [
    { 
        nombre: "Ned", 
        edad: 35, 
        rol: "Vecino" 
    },
    { 
        nombre: "Ralph", 
        edad: 8, 
        rol: "Compañero de clase" 
    },
    { 
        nombre: "Milhouse",
        edad: 10, 
        rol: "Amigo" 
    },
    { 
        nombre: "Nelson",
        edad: 12, 
        rol: "Bravucón" 
    },
    { 
        nombre: "Martin", 
        edad: 10, 
        rol: "Compañero de clase" 
    }
]
const personajesSimpsons = [...simpsons,...amigosSimpsons]
console.log(personajesSimpsons);