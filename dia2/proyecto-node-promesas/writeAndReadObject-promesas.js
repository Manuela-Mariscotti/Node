const fs = require('fs/promises');

async function writeAndRead(path,obj){

    await fs.writeFile(path, JSON.stringify(obj))
    const nuevo = await fs.readFile(path,"utf-8")
    console.log(JSON.parse(nuevo));
    
}

module.exports = {writeAndRead}