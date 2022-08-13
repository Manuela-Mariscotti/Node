const { Professional } = require("../models/professional.model");

function postPros(){
    let profesional = new Professional(
        document.getElementById("id_id").value,
        document.getElementById("name_id").value,
        document.getElementById("age_id").value,
        document.getElementById("genre_id").value,
        document.getElementById("weight_id").value,
        document.getElementById("height_id").value,
        document.getElementById("hairColor_id").value,
        document.getElementById("eyeColor_id").value,
        document.getElementById("race_id").value,
        document.getElementById("isRetired_id").value,
        document.getElementById("nacionality_id").value,
        document.getElementById("oscarNumber_id").value,
        document.getElementById("profession_id").value
    )
    const url = "http://localhost:4000/pros";
    
    if(validar(profesional)){
        let param = {
            headers: {"Content-type":"application/json; charset= UTF-8"},
            body: JSON.stringify(profesional),
            method: "POST"
        }
        fetch(url,param)
        .then(function(data)
        {
            return data.json()
        })
        .then(function(result)
        {
            if (result.error){
                showToast("ERROR: "+result.mensaje,"bg-danger")
            }else{
                showToast("Profesional creado correctamente", "bg-success")
            }
            console.log(result);
        })
        .catch(function(error)
        {
            console.log(error);
        })
    }
}


function validar(profesional){
    resultado=false
    if(profesional.name == "" || profesional.name == "null"){
        showToast("AVISO: Campo nombre no informado","bg-warning")
    }else if(profesional.id == "" || profesional.id == "null"){
        showToast("AVISO: Campo id no informado","bg-warning")
    }else if(profesional.age == "" || profesional.age == "null"){
        showToast("AVISO: Campo edad no informado","bg-warning")
    }else if(profesional.genre == "" || profesional.genre == "null"){
        showToast("AVISO: Campo genero no informado","bg-warning")
    }else if(profesional.weight =="" || profesional.weight == "null"){
        showToast("AVISO: Campo peso no informado","bg-warning")
    }else if(profesional.height == "" || profesional.height == "null"){
        showToast("AVISO: Campo altura no informado","bg-warning")
    }else if(profesional.hairColor == "" || profesional.hairColor == "null"){
        showToast("AVISO: Campo color de pelo no informado","bg-warning")
    }else if(profesional.eyeColor == "" || profesional.eyeColor == "null"){
        showToast("AVISO: Campo color de ojos no informado","bg-warning")
    }else if(profesional.race == "" || profesional.race == "null"){
        showToast("AVISO: Campo raza no informado","bg-warning")
    }else if(profesional.isRetired == "" || profesional.isRetired == "null"){
        showToast("AVISO: Campo está retirado no informado","bg-warning")
    }else if(profesional.nacionality == "" || profesional.nacionality == "null"){
        showToast("AVISO: Campo nacionalidad no informado","bg-warning")
    }else if(profesional.oscarNumber == "" || profesional.oscarNumber == "null"){
        showToast("AVISO: Campo nº de oscars no informado","bg-warning")
    }else if(profesional.profession == "" || profesional.profession == "null"){
        showToast("AVISO: Campo profesion no informado","bg-warning")
    }else{
        resultado = true;
    }
}

function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}