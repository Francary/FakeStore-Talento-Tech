import {getProductos}   from './getProductos.js';
import { deleteProductos } from './deleteProductos.js';
import { postProductos } from './postProductos.js';

const fakestoreapi = process.argv.slice(2);

if ( fakestoreapi[0].toUpperCase() === 'GET' ) {
getProductos(fakestoreapi[1])
} else if (fakestoreapi[0].toUpperCase() === 'POST' ) {
postProductos(fakestoreapi[1], fakestoreapi[2] , fakestoreapi[3],fakestoreapi[4])
} else if (fakestoreapi[0].toUpperCase() === 'DELETE' ) {
deleteProductos(fakestoreapi[1])
} else {
console. log( `Comando no reconocido. Los Metodos Disponibles son GET , POST , DELETE.`)}

