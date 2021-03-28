// 6. Destructuring de Objetos Anidados
// acceder al objeto que esta dentro de otro objeto
const sillon = {
    tapiz        : 'Cuerina',
    esqueleto    : 'Madera',
    sentado     : true,
    confort   : {
        relleno : {
            pluma:   'Ganso',
            forro: 'tela'
        },
        made: {
            ciudad: 'quintero'
        }
    }
}

const { tapiz, confort, confort: { made, made: { ciudad } }  } = sillon;
console.log(tapiz); // cuerina
console.log(confort);//{relleno: {…}, made: {…}}
console.log(made); // {ciudad: "quintero"}
console.log(ciudad); // quintero