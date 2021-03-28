// 11. Funciones en Objetos y acceder a sus valores
// this
const manga = 'ACCEDO';
const pecho = 'DESDE FUERA';

const polera = {
    manga: '10cm',
    pecho: '100cm',
    talla: 'M',
    mostrarInfo: (function() {
        console.log(`Las medidas manga ${manga} y pecho ${pecho}`);                
    })
}
// Mi objeto imprime la información, pero no toma las variables del objeto. Está tomando las variables de afuera 
polera.mostrarInfo();

// Para solucionar el problema, es decir, para poder acceder a los valores del objeto pantalon se utiliza la palabra reservada this
const pantalon = {
    colorPant: 'rojo',
    largoPant: '60cm',
    mostrarInfo: (function () {
        console.log(`El color del pantalon es ${this.colorPant} y el largo es de ${this.largoPant}`);        
    })
}

pantalon.mostrarInfo()