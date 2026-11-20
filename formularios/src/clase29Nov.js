import express from 'express';
import path from 'path';

const PORT= 3000; //por ahora se dejará asi, el 3000 es por convención.
const app=express(); //por convención ponerle app, representa el servidor web

app.use(express.static(path.resolve('public'), {index: 'formulario.html'})); //static es para referirse a la carpeta public, tendrá 
//contenido estatico al nivel del cliente (interpreta el navegador)

app.listen(PORT,()=> {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);

});

//Public index.html, css
//src   ->app.js
// 

