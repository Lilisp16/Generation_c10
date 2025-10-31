//notas par recordar = Si usamos lo que la función recibe desde afuera -> definir un parámetro y pasarle el argumento.
// Si la función va a pedir los datos dentro -> no necesitamos pasarle los parámetros, solo se llama con () vacío.

/*Ejercicio 2: Validar Contraseña
- Formulario de registro.
Crea una función validarContraseña(contraseña) que retorne true si:
- Tiene al menos 8 caracteres.   contraseña.length >= 8
- Incluye un número.             con: /\d/.test(contraseña)            // /\d/; El patrón \d busca cualquier dígito (0-9)
- Incluye una mayúscula.         con: /[A-Z]/.test(contraseña)*/


const prompt = require("prompt-sync")();

function validarContraseña(){
   const contraseña = prompt("Ingrese su contraseña: ");
   if (contraseña.length >= 8 && /\d/.test(contraseña)  && /[A-Z]/.test(contraseña)){
     const mensaje = "Contraseña Permitida";
     return mensaje;
   }else {
    return "Contraseña no permitida🚫 \n Tu contraseña debe contener: \n al menos un numero, almenos un numero y almenos 1 mayuscula"
   }
}

let ingreso = validarContraseña()
console.log(ingreso)




