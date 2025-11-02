/*Ejercicio 3: Reproductor de Música
Tareas:
1.Crea un objeto Reproductor usando una función constructora con:
•Una propiedad estado con valor inicial "detenido" (otros valores posibles: "reproduciendo", "pausado").
2.Implementa estos métodos:
•play():
•Si el estado es "detenido" o "pausado", cambia a "reproduciendo" y muestra: "Reproduciendo música...".
•Si ya está reproduciendo, muestra: "Ya se está reproduciendo música.".
•pausar():
•Si el estado es "reproduciendo", cambia a "pausado" y muestra: "Música pausada.".
•Si no, muestra: "No hay música reproduciéndose.".
•detener(): Cambia el estado a "detenido" y muestra: "Música detenida.".*/



function ReproductorMusica(){
    this.estado = "detenido";                         //este,  Propiedad del objeto que se creará con la función constructora ReproductorMusica. 
    
    this.play = function(){                           // Creo un método (función) dentro del constructor para despues crear el objeto nuevo con new     
        if (this.estado === "detenido" || this.estado === "pausado"){    //Si el estado es "detenido" o es "pausado",  Se ejecuta, si al menos una de las condiciones es verdadera.
           this.estado = "reproduciendo";
            console.log("Reproduciendo musica 🎶🎶🎶")                // === compara valor y tipo y == compara solo valor
        }else{
            console.log("Ya se está reproduciendo música ⏸️") 
        }
};
    this.pausar = function(){
        if (this.estado  === "reproduciendo"){
            this.estado = "pausado";
            console.log("Musica pausada ⏯️")  
        }else{
            console.log("No hay música reproduciéndose.")
        }
    };

    this.detener = function(){
        if (this.estado === "reproduciendo" || this.estado === "pausado"){
            this.estado = "detenido";
             console.log("Música detenida⏹️");
        }
    
 }
}
    
const repro = new ReproductorMusica();

repro.play();
repro.pausar();
repro.detener();
repro.detener();