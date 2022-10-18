// const express = require('express');
// const app = express();

// const { infoCursos } = require('./cursos');

// // Routers
// const routerProgramacion = express.Router();
// app.use('/api/cursos/programacion', routerProgramacion);




// // Routing

// app.get('/', (req, res) => {
//   res.send('Mi primer servidor con Express. Cursos 💻.')
// });

// app.get('/api/cursos', (req, res) => {
//   res.send(JSON.stringify(infoCursos));
// });

// // Parametros de ruta / URL / Cursos de programacion
// app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
//   const lenguaje = req.params.lenguaje;
//   const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

//   if (resultados.length === 0) {
//     return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
//   }

//   res.send(JSON.stringify(resultados));

// });

// // Parametros de ruta / URL / Cursos de matematicas

// app.get('/api/cursos/matematicas', (req, res) => {
//   res.send(JSON.stringify(infoCursos.matematicas));
// });

// app.get('/api/cursos/matematicas/:tema', (req, res) => {
//   const tema = req.params.tema;
//   const resultados = infoCursos.matematicas.filter(curso => curso.tema == - tema);

//   if (resultados.length === 0) {
//     return res.status(404).send(`No se encontraron cursos de ${tema}`);
//   }

//   if (req.query.ordernar === 'vistas') {
//     return res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas)))
//   } 
//   res.send(JSON.stringify(resultados));
// });

// routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
//   const lenguaje = req.params.lenguaje;
//   const nivel = req.params.nivel;

//   const resultado = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

//   if (resultados.length === 0) {
//     return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`)
//   }
//   console.log(req.query.ordenar);
  
//   res.send(JSON.stringify(resultados));
// });


// const PUERTO = process.env.PORT || 3000;

// app.listen(PUERTO, () => {
//   console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
// });

/*---------ROUTERS EN DISTINTOS ARCHIVOS----------*/

// const express = require('express');
// const app = express();

// const {infoCursos} = require('./datos/cursos.js');

// // Routers
// const routerProgramacion = require('./routers/programacion.js');
// app.use('/api/cursos/programacion', routerProgramacion);

// const routerMatematicas = require('./routers/matematicas.js');
// app.use('/api/cursos/matematicas', routerMatematicas);

// // Routing
// app.get('/', (req, res) => {
//   res.send('Mi primer servidor con Express. Cursos 💻.');        
// });

// app.get('/api/cursos', (req, res) => {
//   res.send(JSON.stringify(infoCursos));
// });

// const PUERTO = process.env.PORT || 3000;

// app.listen(PUERTO, () => {
//   console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);      
// });


/*-----------POST,PUT, PATCH Y DELETE----------*/

const express = require('express');
const app = express();

const {infoCursos} = require('./datos/cursos.js');

// Routers
const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas);

// Routing
app.get('/', (req, res) => {
  res.send('Mi primer servidor con Express. Cursos 💻.');        
});

app.get('/api/cursos', (req, res) => {
  res.send(JSON.stringify(infoCursos));
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);      
});