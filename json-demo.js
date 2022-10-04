let infoCurso = {
  "titulo": "Aprende Node.js",
  "numVistas": 45642,
  "numLikes": 21123,
  "temas": [
    "JavaScript",
    "Node.js"
  ],
  "esPublico": true
};


// Estamos pasando de un objeto a una cadena de caracteres
// Cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

console.log(infoCursoJSON.titulo);

// Cadena de caracteres y queremos transformarlo a un objeto de javascript
let infoCursoObjeto = JSON.parse(infoCursoJSON); // Nos permite convertir esa cadena de caracteres a un objeto
console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);

console.log(infoCursoObjeto.titulo);