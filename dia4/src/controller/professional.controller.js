const { Professional } = require("../../models/professional.model");
const app = require("../app");

// let professional=null;

let professional = new Professional ("Leo DiCaprio",48,"male",80,190,"blonde","lightblue","white","false","american",1,"actor, producer")


function getStart(request,response)
{
    console.log('Lanzando la funcion getStart');
    let respuesta = {error:true,codigo:200,mensaje:"Punto de inicio"}
    response.send(respuesta)
}

function getProfessional(request,response)
{
    console.log('Lanzando la funcion getPro');
    let name = request.query.name;
    let respuesta;
    if( professional !=null && (!name || name === professional.name)){
        respuesta = professional;
    }else{
        respuesta = {
                    error: true,
                    codigo: 200,
                    mensaje: "El profesional no existe"
        }
    }
    response.send=(respuesta);
}

function postProfessional(request,response)
{
    console.log('Lanzando la funcion postPro');
    let respuesta;
    console.log(request.body);
    if(professional === null){
        professional = new Professional(
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
        respuesta = {
                    error: false,
                    codigo: 200,
                    mensaje: "Profesional creado",
                    resultado: professional
        }
    }else{
        respuesta = {
                    error: true,
                    codigo: 200,
                    mensaje: "Profesional ya existe",
                    resultado: null
        };
    }
    response.send(respuesta);
}

function putProfessional(request,response)
{
    console.log('Lanzando la funcion putPro');
    let respuesta;
    if(professional != null){
        professional.name = request.body.name;
        professional.age = request.body.age;
        professional.genre = request.body.genre;
        professional.weight = request.body.weight;
        professional.height = request.body.height;
        professional.hairColor = request.body.hairColor;
        professional.eyeColor = request.body.eyeColor;
        professional.race = request.body.race;
        professional.isRetired = request.body.isRetired;
        professional.nacionality = request.body.nacionality;
        professional.oscarNumber = request.body.oscarNumber;
        professional.profession = request.body.profession;
        respuesta = {
                    error: false,
                    codigo: 200,
                    mensaje: "Profesional actualizado",
                    resultado: professional,
        }
    }else{
        respuesta = {
                    error : true,
                    codigo : 200,
                    mensaje : "Profesional no existe",
                    resultado : professional
        }
    }
    response.send(respuesta)
}

function deleteProfessional(request,response)
{   
    console.log('Lanzando la funcion deletePro');
    let respuesta;
    if (professional != null){
        professional = null;
        respuesta = {
                    error: false,
                    codigo: 200,
                    mensaje: "Profesionla borrado",
                    resultado : professional
        }
    }else{
        respuesta = {
                    error: true,
                    codigo: 200,
                    mensaje: "El profesional no existe",
                    resultado : professional
        }
    }
    response.send(respuesta);
}

module.exports = {getStart, postProfessional, getProfessional, putProfessional,deleteProfessional}