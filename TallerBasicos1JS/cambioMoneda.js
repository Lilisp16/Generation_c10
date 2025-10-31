/*Ejercicio 8: Cambio de Moneda
-App de viajes.
Crea una función convertirMoneda(monto, monedaDestino) que convierta de pesos a USD o EUR,
pedir al usuario monto en COP y la moneda con la que desea hacer la converción
*/


const prompt = require("prompt-sync")();

function convertirMoneda(){
    const monto = Number(prompt("Ingresar el monto a convertir: "));
    const monedaDestino = prompt("Ingresar el tipo de moneda (USD o EUR): ").toUpperCase();

    let resultado;
    if (monedaDestino === "USD") { 
        const USD = 3.882
        resultado = monto * USD
       
    }
        else if (monedaDestino === "EUR"){
        const EUR = 4.493;
        resultado = monto * EUR
     } else{
        return "Moneda no valida"
     }
        
        return resultado;
    }



let convercion = convertirMoneda()
console.log("Conversion total es: ", convercion)