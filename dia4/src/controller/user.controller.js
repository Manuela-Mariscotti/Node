const app = require("../app");

let usuario = null; // {nombre:"Jose", apellidos:"Gomez Sanchez"}
//exportar la clase y hacer 


function getStart(request,response)
{
    let respuesta = {error: true , codigo: 200 , mensaje: 'Punto de inicio' }
    response.send(respuesta);
}

function getUser(request,response)
{
    let respuesta;
    if (usuario != null)
        respuesta = usuario;
    else
        respuesta = {error: true, codigo: 200, mensaje: 'El usuario no existe'}
    response.send(respuesta)
}

function postUser(request,response)
{
    let respuesta;
    console.log(request.body);
    if (usuario === null){
        usuario = {
                    nombre:request.body.nombre1,
                    apellidos:request.body.apellidos1           
        }
        respuesta = {
                    error: false,
                    codigo: 200,
                    mensaje: 'Usuario creado',
                    resultado: usuario
        }
    } else{ 
        respuesta = {error: true,
                    codigo: 200,
                    mensaje: 'Usuario ya existe',
                    resultado: null
        };

    }
    response.send(respuesta);
}

function putUser(request,response)
{
    let respuesta;
    if (usuario != null){
        usuario.nombre = request.body.nombre1;
        usuario.apellidos = request.body.apellidos1;
        respuesta = {error : false,
            codigo : 200,
            mensaje : 'Usuario actualizado', 
            resultado : usuario
        };
    }else{
        respuesta = {error: true,
                     codigo: 200,
                    mensaje:'Usuario no existe',
                    resultado: usuario}
    }
    response.send(respuesta);
}

function deleteUser(request,response)
{
    let respuesta;
    if (usuario != null){
        usuario = null;
        respuesta = {
                    error: false,
                    codigo: 200,
                    mensaje: 'Usuario borrado',
                    resultado: usuario
        }
    }else{
        respuesta = {
                    error: true,
                    codigo: 200,
                    mensaje: 'El usuario no existe',
                    resultado: usuario
        }
    }
    response.send(respuesta);
}

function getUserParams(request,response)
{
    let name = request.params.name
    if (usuario != null && name == usuario.nombre){
        response.send(usuario);
    }else{
        response.send({error: true,
                        codigo: 200,
                        mensaje: "El usuario no existe"})
    }
    response.send(respuesta);
}

function getUser(request,response)
{
    let name = request.query.name;
    let respuesta;

    if (usuario != null && (!name || name === usuario.nombre)){
        respuesta=usuario;
    }else{
        respuesta = {
                    error: true,
                    codigo: 200,
                    mensaje: "El usuario no existe"
        }
    }
    response.send(respuesta);
}



module.exports = {getStart, getUser, postUser, putUser, deleteUser, getUserParams, getUser}