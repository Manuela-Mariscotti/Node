class Professional{
    constructor (id ,name, age,genre,weight,height,hairColor,eyeColor,race,isRetired,nacionality,oscarNumber,profession){
        this.id = id;
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nacionality = nacionality;
        this.oscarNumber = oscarNumber;
        this.profession = profession;
    }
}

function getPros(){
    const url = "http://localhost:4000/pros";

    let param = {
    headers: {"Content-type": "application/json; charset= UTF-8"},
    method: "GET"
    }

    fetch(url, param)
    .then(function(data){
        return data.json()
    })
    .then(function(result){
        if(!result.error){
            
            let id= document.getElementById("id_id").value;
            
            let mostrarLista=document.querySelector("table")

            mostrarLista.classList.replace("table-display","table-display2")
            
            if(!id=="" || !id=="null"){

                document.getElementById("mostrarId").innerHTML=result.resultado[id].id;
                document.getElementById("mostrarName").innerHTML=result.resultado[id].name;
                document.getElementById("mostrarAge").innerHTML=result.resultado[id].age;
                document.getElementById("mostrarGenre").innerHTML=result.resultado[id].genre;
                document.getElementById("mostrarWeight").innerHTML=result.resultado[id].weight;
                document.getElementById("mostrarHeight").innerHTML=result.resultado[id].height;
                document.getElementById("mostrarHair").innerHTML=result.resultado[id].hairColor;
                document.getElementById("mostrarEye").innerHTML=result.resultado[id].eyeColor;
                document.getElementById("mostrarRace").innerHTML=result.resultado[id].race;
                document.getElementById("mostrarIsRetired").innerHTML=result.resultado[id].isRetired;
                document.getElementById("mostrarNacionality").innerHTML=result.resultado[id].nacionality;
                document.getElementById("mostrarOscars").innerHTML=result.resultado[id].oscarNumber;
                document.getElementById("mostrarProfession").innerHTML=result.resultado[id].profession;
            }
            if(id=="" || id=="null"){

                let resultado=result.resultado  

                let tbody = document.getElementById("tbody")
                
                for (let i = 0; resultado.length; i++){

                    let newRow = document.createElement("tr")
                    tbody.appendChild(newRow)
                    let nueva = `<td>${resultado[i].id}</td><td>${resultado[i].name}</td><td>${resultado[i].age}</td><td>${resultado[i].genre}</td><td >${resultado[i].weight}</td><td>${resultado[i].height}</td><td >${resultado[i].hairColor}</td><td>${resultado[i].eyeColor}</td><td >${resultado[i].race}</td><td>${resultado[i].isRetired}</td><td >${resultado[i].nacionality}</td><td>${resultado[i].oscarNumber}</td><td>${resultado[i].profession}</td>`
                    newRow.innerHTML=nueva;
                }
            }   
        }
        else{
            showToast("ERROR: "+result.mensaje,"bg-danger")
        }
    })
    .catch(function(error){
        console.log(error);
    })
}

function postPros(){
    let pros1  = new Professional(
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
    console.log(pros1);

   const url = "http://localhost:4000/pros";

    if(validar(pros1)){
      
        let param = {
            headers: {"Content-type":"application/json; charset=UTF-8"},
            body: JSON.stringify(pros1),
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

function putPros(){
    let pros1  = new Professional(
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

    let param = {
        headers: {"Content-type":"application/json; charset=UTF-8"},
        body: JSON.stringify(pros1),
        method: "PUT"
    }
    fetch(url,param)
    .then(function(data){
        return data.json
    })
    .then(function(result){
        if(result.error){
            showToast(`ERROR: ${result.mensaje}`,"bg-danger")
        }else{
            showToast("Modificación realizada", "bg-success")
        }
    })
}

function deletePros(){
    let id = {
        id : document.getElementById("id_id").value
    }
    const url = "http://localhost:4000/pros";

    let param = {
        headers: {"Content-type":"application/json; charset=UTF-8"},
        body: JSON.stringify(id),
        method: "DELETE"
    }
    fetch(url,param)
    .then(function(data){

        return data.json
        
    })
    .then(function(result){
        if(result.error){
            showToast(`ERROR: ${result.mensaje}`,"bg-danger")
        }else{
            showToast("Modificación realizada", "bg-success")
        }
    })

}

function validar(pros1){
    resultado=false
    if(pros1.id == "" || pros1.id == "null"){
        showToast("AVISO: Campo id no informado","bg-warning")
    }else if(pros1.name == "" || pros1.name == "null"){
        showToast("AVISO: Campo nombre no informado","bg-warning")
    }else if(pros1.age == "" || pros1.age == "null"){
        showToast("AVISO: Campo edad no informado","bg-warning")
    }else if(pros1 .genre == "" || pros1 .genre == "null"){
        showToast("AVISO: Campo genero no informado","bg-warning")
    }else if(pros1.weight =="" || pros1.weight == "null"){
        showToast("AVISO: Campo peso no informado","bg-warning")
    }else if(pros1.height == "" || pros1.height == "null"){
        showToast("AVISO: Campo altura no informado","bg-warning")
    }else if(pros1.hairColor == "" || pros1.hairColor == "null"){
        showToast("AVISO: Campo color de pelo no informado","bg-warning")
    }else if(pros1.eyeColor == "" || pros1.eyeColor == "null"){
        showToast("AVISO: Campo color de ojos no informado","bg-warning")
    }else if(pros1.race == "" || pros1.race == "null"){
        showToast("AVISO: Campo raza no informado","bg-warning")
    }else if(pros1.isRetired == "" || pros1.isRetired == "null"){
        showToast("AVISO: Campo está retirado no informado","bg-warning")
    }else if(pros1.nacionality == "" || pros1.nacionality == "null"){
        showToast("AVISO: Campo nacionalidad no informado","bg-warning")
    }else if(pros1.oscarNumber == "" || pros1.oscarNumber == "null"){
        showToast("AVISO: Campo nº de oscars no informado","bg-warning")
    }else if(pros1.profession == "" || pros1.profession == "null"){
        showToast("AVISO: Campo profesion no informado","bg-warning")
    }else{
        resultado = true;
    }
    return resultado;
}

function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}