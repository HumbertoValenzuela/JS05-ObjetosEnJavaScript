// 9. Sellar un Objeto

// (Object Method)

"use strict"; // lo mismo que el comparador === o el !==, es decir, tiene mas comparaciones
//Objeto con comportamiento de Constante
// se conoce como modo estricto "use strict";
// este exige ciertas reglas al escribir código JavaScript

const computador = {
    gabinete: "small",
    fuente: "700W",
    power1: true
}
// sellar un objeto. No se puede agregar ni eliminar propiedades.
// Si modificar las propiedades existentes
Object.seal( computador);
computador.power1 = false;
// computador.imagen = "imagen.jpg";// Cannot add property imagen, object is not extensible
// delete computador.fuente;// Cannot delete property 'fuente' of #<Object>

console.log(computador)

// existe un metodo para saber, si el objeto esta seal o no
console.log(Object.isSealed(computador) ); // true