/*Ejercicio 4: Calcular Promedio de Notas
- Plataforma educativa.
Crea una función calcularPromedio(notas) 
que reciba un array de notas dado por el usuario (separadas por comas) y retorne el promedio 
(redondeado a 2 decimales).*/

const notas = [3.5, 4.0, 5.0]
    
function promedioNotas(notas){
    let sumaTotal = 0;
    for(const nota  of notas){
        sumaTotal += nota;
    }
    const promedio = sumaTotal / notas.length;
    return promedio;

}

const resultado = promedioNotas(notas);
console.log(resultado)