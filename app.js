const express = require('express');
const app = express();

app.listen(3030,()=>{
console.log('Servidor corriendo');
})

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/prueba.html');
});

app.get('/Productos', function(req, res){
    res.send('Estos son nuestros productos');
});

app.get('/contacto', function(req, res){
    res.send('Cualquier problema o duda comunicarse a este numero 47922148')
})