function readConsole(path){

    const fs = require('fs'); 

    const readline = require('readline');
    
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    let persona = {
        nombre : "",
        apellido: "",
        edad: ""
    }
    
    rl.question('Ingrese nombre: ', (nombre) => {
        persona.nombre = nombre
        rl.question('Ingrese apellido: ', (apellido) => {
            persona.apellido = apellido
            rl.question('Ingrese edad: ', (edad) => {
                persona.edad = edad
                rl.close();
                let data = JSON.stringify(persona)
                fs.writeFile(path,data,()=>{
                    fs.readFile(path, ()=>{
                    console.log(JSON.parse(data));
                    })
                })
            });
        });
    })
}

module.exports = {readConsole}