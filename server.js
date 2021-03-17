let http = require ('http');

http.createServer(function(req,res){

    res.writeHead(200, {'Content-Type': 'text/plain'});

    switch (req.url) {
        case '/':

        res.end('Bienvenido');
            
            break;
        case '/productos':
            
        res.end('Productos de KK');
        
        break;
        default:
            res.end('Error, Intente de nuevo mas tarde');
            break;
    }
    
}).listen(3030, 'localhost');
