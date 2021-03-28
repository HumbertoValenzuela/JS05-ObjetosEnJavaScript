// 8. Congelar un Objeto para no poderlo modificar
// (Object Method)

"use strict"; // lo mismo que el comparador === o el !==, es decir, tiene mas comparaciones
//Objeto con comportamiento de Constante
// se conoce como modo estricto "use strict";
// este exige ciertas reglas al escribir código JavaScript

const notebook = {
    procesador: 'Intel',
    Ram: 'Kingston',
    power: true
}
// Prevenir que un objeto sea modificado
Object.freeze( notebook);
// notebook.power = false;// Cannot assign to read only property 'power' of object
// notebook.imagen = "imagen.jpg";// Cannot add property imagen, object is not extensible

console.log(notebook)

// existe un metodo para saber, si el objeto esta freeze o no
console.log(Object.isFrozen(notebook) ); // true

// como no se puede modificar el objeto. se tendrá que clonar y utilizar la copia