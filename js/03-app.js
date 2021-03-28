// 3. Agregar o Eliminar  Propiedades de un objeto
const auto = {
    puerta: "Lechuga",
    motor: "Manzana",
    encendido: true
}

// Agregar una propiedad despues ya en la ejecución del proyecto
auto.imagen = "imagen.jpg";

// Eliminar propiedades del objeto
delete auto.encendido;

console.log(auto);