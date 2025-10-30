/*   ***** Ejercicio 1: Calculadora de Propinas    ****
- Una app para calcular propinas en restaurantes.
Crea una función calcularPropina(total, porcentaje) que 
reciba el total de la cuenta y el porcentaje de propina, 
y retorne el monto final a pagar (total + propina).*/


let cuenta = {
    plato1: 100000,
    plato2: 50000,
    porcentaje: 10
};


function calcularPropina(total, porcentaje){
   const  propina = total * (porcentaje / 100);      //sacamos el porcentaje
   const  totalMasPropina = total + propina
        return totalMasPropina;
}

let totalPedido = cuenta.plato1 + cuenta.plato2

let totalConPropina = calcularPropina(totalPedido, cuenta.porcentaje)

console.log("Total cuenta ", totalPedido)
console.log("Total + propina ", totalConPropina)