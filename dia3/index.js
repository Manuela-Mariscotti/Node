const express = require ('express');
const app = express();

app.get('/miCasa',function(req,res){

    console.log('Request received from client');
    console.log('Request URL : '+req.url);
    console.log('Request Method : '+req.method);
    console.log('User-agent : '+req.headers["user-agent"]);
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify(req.query));
    
    res.end();

})
app.listen(3000);

app.post('/',function(req,res){
    console.log('Request received from client');
    console.log('Request URL : '+req.url);
    console.log('Request Method : '+req.method);
    console.log('User-agent : '+req.headers["user-agent"]);
    res.writeHead(200,{'Content-Type':'application/json'});
    let name = document.getElementById("name").value
    console.log(name);
    res.write(JSON.stringify({ ok: true, message: 'Adios!' }));

})
app.listen(4000);