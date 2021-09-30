'use strict';

const data = require('./../data.json');



const randomCodeBar = () => {
  let codebar = '';
  for( let i = 0; i < 10; i++ ) {
    codebar += random(0, 9);
  }
  return codebar;
}

const random = ( min, max ) => Math.floor( Math.random() * (max-min) ) + min;

function factoryProduct(product) {
  return {
    quantidade: random(5, 200),
    codigo_barras: randomCodeBar(),
    ...product
  }
}



module.exports = {
  up: async (queryInterface, Sequelize) => {
    const products = data.map( product => factoryProduct(product) );

    return await queryInterface.bulkInsert( 'products', products, {}); 
  },

  down: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkDelete( 'products', null, {});
  }
}