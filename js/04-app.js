// 4. Destructuring de Objetos
// Asignar valores que estan en el objeto a una variable

const ventana = {
    vidrio: "Templado",
    marco: "Madera",
    abre: false
}

// Antigua forma de asignar a una variable
const vidrio1 = ventana.vidrio;
console.log(vidrio1);

// Nueva Forma. Destructuring de Objetos
const {vidrio, marco, abre} = ventana;
console.log(vidrio, marco, abre);

const {noExiste} = ventana;
console.log(noExiste); // undefined