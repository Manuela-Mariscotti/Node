const http = require ('http');

const server = http.createServer (function (request,response){

    let bye = '/bye';
    let Index = '/';
    let url = request.url
    if(url==bye){
    console.log('Request received from client');
    console.log('Request URL :'+ request.url);
    console.log('Request Method : '+ request.method);
    console.log('User-agent : '+request.headers['user-agent']);
    console.log('Content-lenght:'+ request.headers["content-length"]);
    response.writeHead(200,{'Content-Type':'application/json'});
    response.write(JSON.stringify({ ok: true, message: 'Adios!' }));
    response.end();
    }if(url==Index){
    console.log('Request received from client');
    console.log('Request URL :'+ request.url);
    console.log('Request Method : '+ request.method);
    console.log('User-agent : '+request.headers['user-agent']);
    console.log('Content-lenght:'+ request.headers["content-length"]);
    response.writeHead(200,{'Content-Type':'application/json'});
    response.write(JSON.stringify({ ok: true, message: 'Recibido!' }));    
    response.end();
    }
});

server.listen(3000);
