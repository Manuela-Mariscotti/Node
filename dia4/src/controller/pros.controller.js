const { Professional } = require("../../models/professional.model");
const app = require("../app");

// let pros =[]; 
let pros =[null]; 

function getPros(request,response){ 
    console.log('Lanzando la funcion getPros');
    // let name = request.query.name;
    // let respuesta;
    // if(pros !=null && (!name || name ===pros.name))
  
}

function postPros(request,response){
    console.log('Lanzando la funcion postPros');
    let respuesta;
    console.log(request.body);
    if(pros===null){
        pros.push(new Professional(
            request.body.name,
            request.body.age,
            request.body.genre,
            request.body.weight,
            request.body.height,
            request.body.hairColor,
            request.body.eyeColor,
            request.body.race,
            request.body.isRetired,
            request.body.nacionality,
            request.body.oscarNumber,
            request.body.profession
        ))
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: "Profesional creado",
            resultado: pros
        }
    }else{
        respuesta = {
            error: true,
            codigo: 200,
            mensaje: "Profesional ya existe",
            resultado: null
        }
    }
    response.send(respuesta);
}

module.exports = {getPros,postPros}