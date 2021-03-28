// 7. El Problema con los objetos

const muralla = {
    altura: "2mt",
    ancho: 4,
    disponible: true
}

// La variable const no puede reasignar valor
// const reasignarConst = 'Original';
// reasignarConst ='No se puede';

//Los objetos se pueden reasignar 
muralla.disponible = false;
console.log(muralla);
delete muralla.ancho;

//Un const, al estar en un Objeto sus propiedades se pueden reescribir o eliminar