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

    printProfessional(){
        console.log(`Id : ${this.id}`);
        console.log(`Name : ${this.name}`);
        console.log(`Age : ${this.age}`);
        console.log(`Genre : ${this.genre}`);
        console.log(`Weight : ${this.weight}`);
        console.log(`Height : ${this.height}`);
        console.log(`Hair color : ${this.hairColor}`);
        console.log(`Eye color: ${this.eyeColor}`);
        console.log(`Race : ${this.race}`);
        console.log(`Is retired? : ${this.isRetired}`);
        console.log(`Nacionality : ${this.nacionality}`);
        console.log(`Oscar numbers : ${this.oscarNumber}`);
        console.log(`Profession : ${this.profession}`);
    }
}

module.exports = { Professional };
