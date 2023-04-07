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
