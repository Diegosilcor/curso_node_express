// const { saludar,saludarHolaMundo }  = require('./saludos.js');


// console.log(saludar('Diego'));
// console.log(saludarHolaMundo());

/*----------SET TIME OUT -------------*/


// function mostrarTema(tema) {
//   console.log(`Estoy aprendiendo ${tema}`);
// }

// setTimeout(mostrarTema, 1000, 'Node.js');

// function sumar(a, b) {
//   console.log(a + b);
// }

// setTimeout(sumar, 2000, 5, 6);

/*----------SET INMEDIATE -------------*/
// function mostrarTema(tema) {
//   console.log(`Estoy aprendiendo ${tema}`);
// }

// console.log('Antes de setInmediate')

// setImmediate(mostrarTema, 'Node.js');

// console.log('Despues de setInmediate')

/*----------SET INTERVAL -------------*/
// function mostrarTema(tema) {
//   console.log(`Estoy aprendiendo ${tema}`);
// }

// setInterval(mostrarTema, 1500, 'Node.js')

// function sumar(a, b) {
//   console.log(a + b);
// }
// setInterval(sumar, 1500, 3, 5);


/*--------------MODULO FS--------------*/


/*------------LEE UN ARCHIVO------------*/
/* READ FILE */
// Agregamos Sync, para utilizar las versiones sincronas

const fs = require('fs');

console.log('Ante de leer un archivo');

const archivo = fs.readFileSync('index.html', 'utf-8');

console.log(archivo);

/*------------CAMBIA NOMBRE DE UN ARCHIVO------------*/
/* RENAME*/
// Agregamos Sync, para utilizar las versiones sincronas

// const fs = require('fs');
// console.log('Antes de cambiar un nombre');
fs.renameSync('index.html', 'main.html', (err) => {
  if (err) {
    throw err;
  }
  console.log('Nombre cambiado exitosamente.');
});

console.log('Despues de cambiar el nombre');

/*------------AGREGA UN CONTENIDO A UN ARCHIVO------------*/

/* APPEND FILE */
// Agregamos Sync, para utilizar las versiones sincronas

// const fs = require('fs');

// console.log('Antes de agregar contenido');
fs.appendFileSync('index.html', '<p>Hola</p>', (err) => {
  if (err) {
    throw err;
  }
  console.log('Archivo actualizado');
});
console.log('Despues de agregar contenido');

/*------------REEMPLAZA CONTENIDO DE UN  ARCHIVO------------*/
/* WRITE FILE */
// const fs = require('fs');
// console.log('Antes de reemplazar contenido');
fs.writeFileSync('index.html', 'Contenido nuevo', (err) => {
  if (err) {
    throw err;
  }
  console.log('Contenido reemplazado exitosamente');
})
console.log('Despues de reemplazar contenido');

/*------------ELIMINA UN ARCHIVO------------*/
/* UNLINK */


// const fs = require('fs');

// console.log('Antes de eliminar archivo');
fs.unlinkSync('eliminar.html', (err) => {
  if (err) {
      throw err;
  }
  console.log('Se elimino correctamente el archivo');
})

console.log('Despues de eliminar archivo');