const { rejects } = require('assert');
const fs = require('fs/promises'); 
const readline = require ("readline")
let persona = {
    nombre : "",
    apellido: "",
    edad: ""
}
function pregunta(pregunta) {
    const question = new Promise ((resolve,reject)=>{
        const rl = readline.createInterface({
            input : process.stdin,
            output : process.stdout
        });
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close;
        });
    });
    return question;
}
async function asyncAwait(){
    persona.nombre = await pregunta("Ingresa nombre : ")
    persona.apellido = await pregunta("Ingresa apellido : ")
    persona.edad = await pregunta("Ingresa edad : ")
    console.log(persona);
}
asyncAwait()