let persona = {
    name : "Juan",
    surname : "Perez",
    age : "30"
}

const fs = require('fs'); 
let data = JSON.stringify(persona)

fs.writeFile("persona.JSON",data,()=>{
    fs.readFile("persona.JSON", ()=>{
        console.log(JSON.parse(data));
    })
})
