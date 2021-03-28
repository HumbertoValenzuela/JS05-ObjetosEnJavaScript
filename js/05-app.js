// 5. Objetos dentro de Objetos

const puerta = {
    tipo        : 'Fierro',
    cerrojo     : 'doble',
    abierto     : true,
    adicional   : {
        medidas : {
            peso:   '11kg',
            medida: '1.8mt'
        },
        fabricacion: {
            pais: 'china'
        }
    }
}

// Sintaxis de Punto
// acceder al objeto dentro del objeto
console.log(puerta.adicional.medidas.peso);

// Nueva Forma. Destructuring de Objetos
// acceder al objeto que esta dentro de otro objeto