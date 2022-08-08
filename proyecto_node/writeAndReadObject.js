
function writeAndRead(path, obj){
    const fs = require('fs');

    let data = JSON.stringify(obj)

    fs.writeFile(path,data,()=>{
        fs.readFile(path, ()=>{
        console.log(JSON.parse(data));
    })
})
}

module.exports = {writeAndRead}