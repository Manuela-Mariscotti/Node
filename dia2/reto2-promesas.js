let persona = {
    name : "Juan",
    surname : "Perez",
    age : "30"
}

let mascota = {
    name : "Darcy",
    surname : "Perrotti",
    animal : "dog",
    age : "5"
}


const fs = require('fs/promises'); 

fs.writeFile("persona.JSON",JSON.stringify(persona))
.then( () =>{
    return fs.readFile("persona.JSON", "utf-8")
})
.then(data=>{
    console.log(JSON.parse(data));
})
.catch (err =>{
    console.log(err);
})

// mascota = null;
async function asyncAwait(){
    try{
        await fs.writeFile("mascotas.JSON", JSON.stringify(mascota))
        const nuevo = await fs.readFile("mascotas.JSON","utf-8")
        console.log(JSON.parse(nuevo));
    } catch (error){
        console.log(error);
    }
}
asyncAwait()