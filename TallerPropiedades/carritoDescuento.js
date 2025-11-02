//Clase o función (class function) constructora: es como un 'molde' para crear objetos.
//Métodos dentro de la clase: son funciones que el objeto puede ejecutar.
//this siempre apunta al objeto actual que se está creando o usando.
//this Se usa cuando se quiere acceder o modificar las propiedades del objeto dentro de sus métodos.

/*Ejercicio 4: Carrito de Compras con Descuentos (manejo de estados en un objeto usando métodos y condicionales (if/else).
Tareas:
1.Crea un objeto Carrito usando una función constructora o clase que tenga:
•Una propiedad productos (array vacío).
•Una propiedad total (inicialmente 0).
2.Implementa estos métodos:
•agregarProducto(nombre, precio): Añade el producto al array y suma el precio al total.
•calcularDescuento():
•Si el total es mayor a $100, aplica un 10% de descuento y muestra.
•Si el total es mayor a $50 pero menor o igual a $100, aplica un 5% de descuento y muestra.
•Si no, mostrar total, sin descuento.   */

// aqui carrito es una plantilla o model para crear el objeto usando este molde
//clase carrito con  2 metodos agregarProducto y calcularDescuento

class Carrito{
    constructor(){
        this.productos = [];
        this.total = 0;


    }agregarProducto(nombre, precio){   
            precio = Number(precio);
            this.productos.push({nombre: nombre, precio: precio});
            this.total += precio;


     }calcularDescuento(){
          if (this.total > 100){
            let descuento10 = this.total * 10/100
            let resultado10 = this.total - descuento10
            console.log("Descuento aplicado del 10%:  ", descuento10)
            console.log("Total despues de descuento: ", resultado10);

          }else if (this.total > 50 && this.total <= 100){
            let descuento5 = this.total *5/100
            let resultado5 = this.total - descuento5
            console.log("descuento aplicado del 5%: ", descuento5)
            console.log("Total despues de descuento: ", resultado5)
          
        }else {
            console.log("Total sin el descuento: ", this.total);
        }

     }
   

}
   
const carrito = new Carrito();
carrito.agregarProducto("silla", "1000");
carrito.agregarProducto("tocador", "5000");
console.log(carrito);
carrito.calcularDescuento();

const carrito2 = new Carrito();
carrito2.agregarProducto("Sofa", "20");
carrito2.agregarProducto("Escritorio", "45");
console.log(carrito2);
carrito2.calcularDescuento();



