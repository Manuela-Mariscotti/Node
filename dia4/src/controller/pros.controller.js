const { Professional } = require("../../models/professional.model");
const app = require("../app");

let RobertDeNiro = new Professional ("1","Robert DeNiro","80","male","90", "160","black","brown","white","false","american","2","actor, producer");

let SamuelLJackson = new Professional ("2","Samuel L. Jackson","65","male","90","160","black","brown","black","false","american","0","actor, producer");

let TimRoth = new Professional ("3","Tim Roth","65","male","90","160","lightbrown","green","white","false","american","0","actor, producer");

// let pros = [RobertDeNiro, SamuelLJackson, TimRoth]
let pros = []

function getPros(request,response){ 
    console.log('Lanzando la funcion getPros');
    let respuesta;
    let index = request.query.index
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: "Profesional encontrado",
        resultado: pros[index]
    }
    if(!index){
        respuesta = {
        error: false,
        codigo: 200,
        mensaje: "Profesionales encontrados",
        resultado: pros
        }
    }
    response.send(respuesta);
}

function postPros(request,response){
    console.log('Lanzando la funcion postPros');
    let respuesta;
    console.log(request.body);
    let pros1 = new Professional(
        request.body.id,
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
    )
    pros.push(pros1)
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: "Profesional creado",
        resultado: pros
    }
    response.send(respuesta);
}

function putPros(request,response){
    console.log('Lanzando la funcion putPros');
    let respuesta;
    let idInicial;
    let idNuevo=request.body.id
    
    for (let i = 0; i < pros.length; i++) {
        idInicial = pros[i].id;
        if(idNuevo == idInicial){
            pros[i].id = request.body.id,
            pros[i].name = request.body.name;
            pros[i].age = request.body.age;
            pros[i].genre = request.body.genre;
            pros[i].weight = request.body.weight;
            pros[i].height = request.body.height;
            pros[i].hairColor = request.body.hairColor;
            pros[i].eyeColor = request.body.eyeColor;
            pros[i].race = request.body.race;
            pros[i].isRetired = request.body.isRetired;
            pros[i].nacionality = request.body.nacionality;
            pros[i].oscarNumber = request.body.oscarNumber;
            pros[i].profession = request.body.profession;
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: "Profesional actualizado",
                resultado: pros[i],
            }
        }
    }
    response.send(respuesta);
}

function deletePros(request,response){
    console.log('Lanzando la funcion deletePros');
    let respuesta;
    let idInicial;
    let idNuevo=request.body.id
    console.log(idNuevo);
    for (let i = 0; i < pros.length; i++) {
        idInicial = pros[i].id;

        if(idNuevo == idInicial){
            pros.splice(i,1)
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: "Profesional eliminado",
                resultado: pros,
            }
        }
    }
    response.send(respuesta);
}

module.exports = {getPros, postPros, putPros, deletePros}