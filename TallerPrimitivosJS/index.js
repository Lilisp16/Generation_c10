// 1. VARIABLES Y DATOS ejer 1

let nombre = "Lili";
let edad = 40;

// ejer 2
let estudiante = true;
let sin_valor;
let valor_nulo = null;

console.log("sinValor:", sin_valor); 
console.log("valorNulo:", valor_nulo); 


// 2. INGRESO DE DATOS POR TECLADO ejercicio 1
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


// 3. CONDICIONALES ej 1

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

//BUCLE WHILE

//ejer 1

let ingresar_num = prompt("Ingresa un número: ");
ingresar_num = Number(ingresar_num); 

let i = 1;
while (i <= ingresar_num){
    console.log(i);
    i++;
}

//ejer 2 contraseña
let contraseña;

while(contraseña !== "1234"){
    contraseña = prompt("Ingresa tu contraseña: ");
  
} console.log("contraseña correcta")

