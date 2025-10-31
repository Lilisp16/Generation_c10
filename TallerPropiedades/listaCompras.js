/*Ejercicio 2: Lista de Compras (Array + for)
Gestionar una lista dinámica de productos.Tareas:
1. Usa el constructor ListaCompras para crear una lista vacía (this.productos = []).
2. Añade 3 productos con el método agregar().
3. Implementa el método mostrar() que use un for para listar los productos numerados (ej: "1. Manzanas").
4. Muestra la lista completa en consola. */


function Compras() {
    this.productos = [];
    this.agregar = function(producto){
        this.productos.push(producto);
    };
    this.mostrar = function(){     //otro metodo del objeto 
        for(let i = 0; i < this.productos.length; i++){   // i empieza en 0 y se incrementa hasta el último índice del array
            console.log(`${i + 1}. ${this.productos[i]}`) //aqui saco la lista numerada
                                                        //i + 1 -> número visible para la lista (empezando en 1) es decir empieza numero en 1 
                                                        //this.productos[i] -> valor real del producto en esa posición del array. es decir 0..

        }
    };

}

const lista = new Compras();
lista.agregar("PepaEpan");
lista.agregar("Chontaduro");

lista.mostrar();

