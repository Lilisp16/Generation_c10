/*Ejercicio 7: Simulador de Cajero Automático
-App bancaria.
Crea una función retirarDinero(saldo, monto) que:
Pide al usuario su saldo actual y el monto a retirar.
Muestra el nuevo saldo o "Fondos insuficientes".*/

const prompt = require("prompt-sync")();


function retirarDinero(){
    const saldo = Number(prompt("Ingresar su saldo actual: "));
    const monto = Number(prompt("Ingresar el monto a retirar: "));
    
    if (monto <= saldo){    
        const nuevoSaldo = saldo - monto;
        return "Retiro exitoso. Nuevo saldo: " + nuevoSaldo
    }else{
        return "Fondos insuficientes";
    }

}

let saldo = retirarDinero()
console.log(saldo)