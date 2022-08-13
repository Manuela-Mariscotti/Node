const { Professional } = require("../../models/professional.model");
const app = require("../app");

let RobertDeNiro = new Professional ("1","Robert DeNiro","80","male","90", "160","black","brown","white","false","american","2","actor, producer");

let SamuelLJackson = new Professional ("2","Samuel L. Jackson","65","male","90","160","black","brown","black","false","american","0","actor, producer");

let TimRoth = new Professional ("3","Tim Roth","65","male","90","160","lightbrown","green","white","false","american","0","actor, producer");

let pros = [RobertDeNiro, SamuelLJackson, TimRoth]

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
        request.body.id_id,
        request.body.name_id,
        request.body.age_id,
        request.body.genre_id,
        request.body.weight_id,
        request.body.height_id,
        request.body.hairColor_id,
        request.body.eyeColor_id,
        request.body.race_id,
        request.body.isRetired_id,
        request.body.nacionality_id,
        request.body.oscarNumber_id,
        request.body.profession_id
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
    let nameInicial;
    let nameNuevo=request.body.name
    
    for (let i = 0; i < pros.length; i++) {
        nameInicial = pros[i].name;

        if(nameNuevo == nameInicial){
            pros[i].id = request.body.id_id,
            pros[i].name = request.body.name_id;
            pros[i].age = request.body.age_id;
            pros[i].genre = request.body.genre_id;
            pros[i].weight = request.body.weight_id;
            pros[i].height = request.body.height_id;
            pros[i].hairColor = request.body.hairColor_id;
            pros[i].eyeColor = request.body.eyeColor_id;
            pros[i].race = request.body.race_id;
            pros[i].isRetired = request.body.isRetired_id;
            pros[i].nacionality = request.body.nacionality_id;
            pros[i].oscarNumber = request.body.oscarNumber_id;
            pros[i].profession = request.body.profession_id;
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
    console.log('Lanzando la funcion putPros');
    let respuesta;
    let nameInicial;
    let nameNuevo=request.body.name_id
    
    for (let i = 0; i < pros.length; i++) {
        nameInicial = pros[i].name;

        if(nameNuevo == nameInicial){
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