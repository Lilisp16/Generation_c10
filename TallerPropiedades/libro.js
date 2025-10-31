/*Ejercicio 1: Libro (Objeto básico + if)
Crear un sistema de préstamo de libros.Tareas:
1. Usa el constructor Libro para crear un objeto con título y autor.
2. Agrega una propiedad prestado = false.
3. Implementa el método prestar() que:
• Cambie prestado a true si el libro está disponible.
• Muestre un mensaje de error si ya está prestado (usando if).
4. Prueba prestar el libro dos veces y observa los mensajes. */

/*this.prestar = function() { if (!this.prestado) 
{ this.prestado = true; return `"${this.titulo}" ha sido prestado.`; 
 } 
 else 
    { return `Error: "${this.titulo}" ya está prestado.`; } }; */

//
function Libro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor; 
    this.prestado = false;    //El libro inicialmente NO está prestado.
    this.prestar = function (){     // "prestar" es un método del objeto (una función dentro del objeto).
        if (!this.prestado){    // Si el libro NO está prestado (prestado es false)...
            this.prestado = true;   // entonces márcalo como prestado (cambia prestado a true).
            return `"${this.titulo}" ha sido prestado.`   // Muestra mensaje: el libro acaba de ser prestado.
        } else{
            return `Error: "${this.titulo}" ya está prestado. No esta disponible`;   // Si ya estaba prestado, muestra un mensaje de error: no se puede prestar otra vez.
        }
    }
}

const libro1 = new Libro ("Orgullo y prejuicio", "Jane Austen")
const libro2 = new Libro ("El Principito", "Antoine de Saint-Exupéry")


// Primera vez  disponible
console.log(libro1.prestar()); 

// Segunda vez  ya prestado
console.log(libro1.prestar()); 