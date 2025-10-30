/*Ejercicio 3: Buscar Producto en Inventario
- Sistema de gestión de inventario.
Crea una función buscarProducto(nombre, inventario) que retorne el producto si existe, 
o null si no. El inventario debería estar PREDEFINIDO
ejemplo:
const inventario = [
{ nombre: "Camisa", precio: 20 },
{ nombre: "Zapatos", precio: 50 }
]; */

const miInventario =  [
    {nombre: "audifonos", precio: 850000},
    {nombre: "tablet", precio: 350000},
    {nombre: "mouse", precio: 50000}
];




function buscarProducto(nombre, inventario ){
    for (let i= 0; i< inventario.length; i++){
    
    if(inventario[i].nombre === nombre){      //=== comparmos su valro y tipo de dato
        return inventario[i];
    
    }
}
return null;  // si no lo encuentra
}


console.log(buscarProducto("tablet", miInventario));

console.log(buscarProducto("teclado", miInventario));