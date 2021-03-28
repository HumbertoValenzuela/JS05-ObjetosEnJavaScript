// 10. Copiar 2 objetos

const roblox = {
    skinBasico: 'basico',
    skinNormal: 'Normal',
    tieneSkin: true
}

const colorRoblox = {
    colorBasico: 'negro',
    colorNormal: 'blanco',
    tieneColor: true
}

// copia los dos Objetos y los deja en una variable
const unirRobloxColorRoblox = Object.assign(roblox, colorRoblox);

console.log(unirRobloxColorRoblox);

// Spread Operator o Rest Operator. copiar los dos objetos y dejarlos en una variable
// ... significa copiar

 const copiarObjetos = {...roblox, ...colorRoblox}
 console.log(copiarObjetos);