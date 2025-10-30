/*Ejercicio 6: Contador de Palabras
-Editor de texto.
Crea una función contarPalabras(texto) que retorne el número de palabras 
en un string (separadas por espacios). */

let textoLargo = " En la mensa hay un mapa y un lapiz"


function contarPalabras(texto){
    const palabras = texto.trim().split(/\s+/);  //  trim (quita expacios al inicio -final)split(/\s+/)cuando hay muchos especios en el texto
    return palabras.length; //devuelve la cantidad de palabras

}

console.log("Cantidad de palabras", contarPalabras(textoLargo));