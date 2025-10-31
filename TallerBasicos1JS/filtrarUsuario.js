/* Ejercicio 5: Filtrar Usuarios por Edad
- Red social.
Dado un array de usuarios ([{ nombre: "Ana", edad: 25 }, ...]), 
crea una función filtrarUsuarios(usuarios, edadMinima) que retorne 
los usuarios que cumplen con la edad mínima, la cual será dada por el usuario, 
es decir, si el usuario escribe 18, debería decirle que personas de la lsita 
cumplen con tener más de 18.*/

const prompt = require("prompt-sync")();

let usuarios = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Nel", edad: 21 },
    { nombre: "Julio", edad: 17 }
]

function filtrarUsuarios(usuario){
    const edad = Number(prompt("Ingresar la edad: "));
    if (edad >= 18){
        return usuario.filter(u => u.edad >= edad)

    }else{
        return "Es menor de edad, datos protegidos"
    }
    

}

let filtro = filtrarUsuarios(usuarios)

console.log(filtro)