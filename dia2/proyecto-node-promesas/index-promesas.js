let myLib = require("./writeAndReadObject-promesas");
let myLib2 = require("./readConsole-promesas");

let mascota = {
    name : "Darcy",
    surname : "Perrotti",
    animal : "dog",
    age : "5"
}

// myLib.writeAndRead("mascotas1.json",mascota);

myLib2.readConsole("persona2.json")