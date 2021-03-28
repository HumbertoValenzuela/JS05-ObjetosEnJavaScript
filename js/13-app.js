// 13. Object .keys, .values y .entries
 
const papel = {
    celulosaCantidad: '100gr',
    agua            : '30gr',
    secado          : true
}

// Key: muestra las key del objeto
// Utilizado para saber si el objeto esta vacio
// UTilizado para saber que la consulta de la base de datos de un cliente fue exitosa o no, se puede saber con Object.keys
console.log(Object.keys(papel) );

// values: retorna los valores del objeto
console.log(Object.values(papel));
// entries: retorna la keys y values
console.log(Object.entries(papel));