// const EventEmitter = require('events');
// console.log(EventEmitter);

/*------------MODULO EVENTS-----------*/
// const EventEmitter = require('events');

// const emisorProductos = new EventEmitter();

// emisorProductos.on('compra', (total,numProductos) => {
//   console.log(`Se realizo una compra por $${total}.`);
//   console.log(`Numero de productos:${numProductos}`);
// });

// emisorProductos.emit('compra', 500,5);

/*------------PROMESAS-----------*/
// const promesaCumplida = false;

// const miPromesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//    if (promesaCumplida) {
//      resolve('Promesa cumplida');
//    } else {
//      reject('Promesa rechazada...');
//    }
//   },3000);
// });

// const manejarPromesaCumplida = (valor) => {
//   console.log(valor);
// };

// const manejarPromesaRechazada = (razonRechazo) => {
//   console.log(razonRechazo);
// }
// miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);

/*---------EJEMPLO---------*/
// const estatusPedido = () => {
//   return Math.random() < 0.8;

// };
// const miPedidoDePizza = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (estatusPedido()) {
//       resolve('Pedido exitoso. Su pizza esta en camino.');
//     } else {
//       reject('Ocurrio un error. Por favor intente nuevamente.')
//     }
//   }, 3000);
// });

// Unificar todo en un bloque de codigo

// miPedidoDePizza
//   .then((mensajeDeConfirmacion) => {
//     console.log(mensajeDeConfirmacion);
//   })

//  Catch maneja el rechazo de esa promesa 

//   .catch((mensajeDeError) => {
//     console.log(mensajeDeError);
//   })

// Otras formar de utilizar catch y then

// const manejarPedido = ((mensajeDeConfirmacion) => {
//   console.log(mensajeDeConfirmacion);
// });

// const manejarRechazo = ((mensajeDeError) => {
//   console.log(mensajeDeError);
// });

// miPedidoDePizza.then(manejarPedido).catch(manejarRechazo);


/*-----------ENCADENAR PROMESAS Y ASYNC AWAIT----------*/

function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando: ${producto} de Diego Silva Cordoba`);
    setTimeout(() => {
    if (producto === 'taza') {
      resolve('Ordenando una taza con el logo de Diego Silva Cordoba');
    } else {
      reject('Este producto no esta disponible actualmente.');
    }
    }, 2000);
  });
}

function procesarPedido(respuesta) {
  return new Promise(resolve => {
    console.log('Procesando respuesta');
    console.log(`La respuesta fue: "${respuesta}"`);
    setTimeout(() => {
      resolve('Gracias por su compra. Disfruta tu producto de Diego Silva Cordoba');
    }, 4000);
  });
}

ordernarProducto('taza')
  .then(respuesta => {
    console.log('Respuesta recibida');
    console.log(respuesta);
    return procesarPedido(respuesta);
  })
  .then(respuestaProcesada => {
    console.log(respuestaProcesada);
  })
  .catch(error => {
    console.log(error);
  });

async function realizarPedido(producto) {
  try {
  const respuesta = await ordenarProducto(producto);
  console.log('Respuesta recibida');
  const respuestaProcesada = procesarPedido(respuesta);
  console.log(respuestaProcesada);
  } catch (error) {
    console.log(error);
  }
}

realizarPedido('taza');