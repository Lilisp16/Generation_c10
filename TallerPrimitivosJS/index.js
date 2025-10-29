let nombre = "Lili";
let edad = 40;

let estudiante = true;
let sin_valor;
let valor_nulo = null;

console.log("sinValor:", sin_valor); 
console.log("valorNulo:", valor_nulo); 


//2. ejercicio 1
const prompt = require("prompt-sync") ();

let año_nacimiento =  prompt("Ingresa tu año de nacimiento: ")
let año_actual = new Date().getFullYear(); // me trael el año actual
let calcular = año_actual - año_nacimiento;
console.log("su edad es: ", calcular);

// ejercicio 2

let n1 = prompt("Ingresa un numero: ")
let n2 = prompt("Ingresa un numero: ")
let resultado = Number(n1) + Number(n2);
console.log("La suma es: ", resultado)


//ejercicio 3

let tu_edad = prompt("Ingresa tu edad: ")

if (Number(tu_edad) >= 18){
    console.log("puedes entrar")

}else{
    console.log("No puedes entrar");
}

//ejercicio 2

let tu_numero = prompt("Ingresa un número: ");
tu_numero = Number(tu_numero); // para convertirlo una sola vez y no poner en los if Numero

if (tu_numero > 0) {
    console.log("Tu número es positivo");
} else if (tu_numero < 0) {
    console.log("Tu número es negativo");
} else {
    console.log("Tu número es cero");
}