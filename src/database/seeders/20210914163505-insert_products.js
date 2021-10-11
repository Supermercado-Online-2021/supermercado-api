'use strict';

const data = require('./../data.json');



const randomCodeBar = () => {
  let codebar = '';
  for( let i = 0; i < 40; i++ ) {
    codebar += random(0, 9);
  }
  return codebar;
}

const random = ( min, max ) => Math.floor( Math.random() * (max-min) ) + min;

function factoryProduct(product) {
  return {
    amount: random(5, 200),
    code_bar: randomCodeBar(),
    ...product
  }
}



module.exports = {
  up: async (queryInterface, Sequelize) => {
    const products = data.map( product => factoryProduct(product) );
    const randomProducts = [];

    while(products.length > 0) {
      const index = Math.floor( Math.random() * products.length );
      randomProducts.push( products[index] );

      products.splice( index, 1 );
    }

    return await queryInterface.bulkInsert( 'products', randomProducts, {}); 
  },

  down: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkDelete( 'products', null, {});
  }
}