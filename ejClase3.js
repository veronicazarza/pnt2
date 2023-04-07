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
