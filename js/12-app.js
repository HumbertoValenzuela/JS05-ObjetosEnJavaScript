// 12. El Object Constructor. 
// Crear Objeto

// Se ocupa más Object Literal


// Object Literal
const cama = {
    cubrecama: '2plazas',
    tipocama: 'BoxSprim',
    disponible: true
}

// Object Constructor 
// Debido a This no pierde la referencia
function funcionCama(cubreCama, tipoCama) {
    this.cubreCama = cubreCama;
    this.tipoCama = tipoCama;
    this.disponible = true;    
}

// notar que no pierde la referencia debido a this
const camaMarca = new funcionCama('diseño 1plaza', 'Europea');
console.log(camaMarca);
const camaMarca2 = new funcionCama('diseño max', 'Americana');
console.log(camaMarca2);