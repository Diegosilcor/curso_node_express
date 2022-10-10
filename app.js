/*----------CREANDO SERVIDOR----------*/

// const http = require('http');

// const servidor = http.createServer((req, res) => { // Este metodo crea un servidor
//   // Proceso
//   res.end('Hola, mundo');
// }); 

// const puerto = 4000;

// servidor.listen(puerto, () => {
//   console.log(`El servidor esta escuchando en http://localhost: ${puerto}...`);
// });


/*---------REQUEST=SOLICITUD-------*/

// const http = require('http');

// const servidor = http.createServer((req, res) => { 
//   console.log('===> req (solicitud)');
//   console.log(req);
//   console.log(req.url);
//   console.log(req.method);
//   console.log(req.headers);

//   res.end('Hola, mundo');
// }); 

// const puerto = 4000;

// servidor.listen(puerto, () => {
//   console.log(`El servidor esta escuchando en http://localhost: ${puerto}...`);
// });

/*---------RESPONSE=RESPUESTA-------*/

// const http = require('http');

// const servidor = http.createServer((req, res) => { 
//   console.log('===> res (respuesta)');

  // console.log(res.statusCode); // 200 ok
  // res.statusCode = 404;
  // console.log(res.statusCode); // 404 Not found

//   res.setHeader('content-type', 'application/json'); // Obtener elementos de los header/cabeceras
//   console.log(res.getHeaders());
  
//   res.end('Hola, mundo');
// }); 

// const puerto = 4000;

// servidor.listen(puerto, () => {
//   console.log(`El servidor esta escuchando en http://localhost: ${puerto}...`);
// });

/*---------------MODULO URL--------------*/
// const miURL = new URL('http://www.ejemplo.org/cursos/programacion?ordernar=vistas&nivel=1');
// console.log(miURL.hostname); // www.ejemplo.org 
// console.log(miURL.pathname); // cursos/programacion 
// console.log(miURL.searchParams);
// console.log(miURL.searchParams.get('ordenar'));
// console.log(miURL.searchParams.get('nivel'));
// console.log(miURL.protocol);

/*-----------MANEJAR LAS DISTINTAS RUTAS EN UN SERVIDOR CON NODE.JS---------*/ 
const http = require('http');
const {infoCursos} = require('./cursos');

const servidor = http.createServer((req, res) => {
  const {method} = req;

  switch(method) {
    case 'GET':
      return manejarSolicitudGET(req, res);
    case 'POST':
      return manejarSolicitudPOST(req, res);
    default:
      res.statusCode = 501;
      res.end(`El metodo usado no puede ser manejado por el servidor: ${method}`);
  }
});

function manejarSolicitudGET(req, res) {
  const path = req.url;

  console.log(res.statusCode); // Sera 200 ok, por defecto

  if (path === '/') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end('Bienvenidos a mi primer servidor y API creados con Node.js');
  } else if (path === '/cursos') {
    res.end(JSON.stringify(infoCursos));
  } else if (path === '/cursos/programacion') {
    return res.end(JSON.stringify(infoCursos.programacion));
  }
  res.statusCode = 404;
  return res.end('El recurso solicitado no existe...');
}

function manejarSolicitudPOST(req, res) {
  const path = req.url;
  if (path === '/cursos/programacion') {
    
    let cuerpo = '';
    req.on('data', contenido => {
      cuerpo += contenido.toString();
    });

    req.on('end', () => {
      console.log(cuerpo);
      console.log(typeof cuerpo);
      // Convertir a un objeto de JavasScript
      cuerpo = JSON.parse(cuerpo);
      console.log(typeof cuerpo);
      console.log(cuerpo.titulo);
      res.end('El servidor recibio una solicitud POST para /cursos/programacion');

    });
    // return res.end('El servidor recibio una solicitud POST para /cursos/programacion');
  }
}
const PUERTO = 3000;

servidor.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});





