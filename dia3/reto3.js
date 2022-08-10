const express = require ('express');
const app = express();

app.get('/',function (req,res){
    console.log('Request received from client');
    console.log('Request URL : '+req.url);
    console.log('Request Method : '+req.method);
    console.log('User-agent : '+req.headers["user-agent"]);
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify({ ok: true, message: 'Recibido!' }));    
    res.end();
});
app.get('/bye',function (req,res){
    console.log('Request received from client');
    console.log('Request URL : '+req.url);
    console.log('Request Method : '+req.method);
    console.log('User-agent : '+req.headers["user-agent"]);
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify({ ok: true, message: 'Adios!' }));    
    res.end();
});

app.listen(4000);