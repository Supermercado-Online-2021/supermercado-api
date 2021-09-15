'use strict';



const randomCodeBar = () => {
  let codebar = '';
  for( let i = 0; i < 10; i++ ) {
    codebar += random(0, 9);
  }
  return codebar;
}

const random = ( min, max ) => Math.floor( Math.random() * (max-min) ) + min;

function factoryProduct( nome, preco, category_id ) {
  return {
    nome,
    preco,
    quantidade: random(30, 200),
    image_src: '/public/images/image.png',
    codigo_barras: randomCodeBar(),
    category_id
  }
}



module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert( 'products', [
      factoryProduct( 'Arroz Camil 5kg', 21.99, 5 ),
      factoryProduct( 'Agua sanitária SUPREMA 5 litros', 11.9, 4 ),
      factoryProduct( 'Gilette prestobarba 3 Unidades', 6.6, 4 ),
      factoryProduct( 'Cerveja Amstel Lager Puro Malte 350ml', 3.5, 3 ),
      factoryProduct( 'Coca-Cola Original', 5.07, 3 ),
      factoryProduct( 'Creme de Leite Aurora 200g', 2.2, 5 ),
      factoryProduct( 'Desodorante Axe Black 152ml', 9.4, 4 ),
      factoryProduct( 'Detergente Ype', 1.79, 4 ),
      factoryProduct( 'Lasanha Bolonhesa Sadia 1kg', 21.88, 5 ),
      factoryProduct( 'Leite Italac Integral 1l', 4.10, 3 ),
      factoryProduct( 'Leite Ninho', 16.6, 5 ),
      factoryProduct( 'Macarrão Adria 500g', 3.35, 5 ),
      factoryProduct( 'Margarina Vigor 500g ', 6.19, 5 ),
      factoryProduct( 'Molho Tradicional Quero', 1.8, 5 ),
      factoryProduct( 'Pão de forma Tradicional Visconti 400g', 5.59, 5 ),
      factoryProduct( 'Papel Higiênico Neve', 32.05, 4 ),
      factoryProduct( 'Pasta de Dente Colgate 50g', 1.6, 4 ),
      factoryProduct( 'Pepsi 350ml', 3.5, 3 ),
      factoryProduct( 'Refrigerante Guarana Dolly', 4.3, 3 ),
      factoryProduct( 'Sabonete Protex 85g', 2.6, 4 ),
      factoryProduct( 'Shampoo Anticaspas Clear Men 400ml', 14.99, 4 )
    ], {}); 
  },

  down: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkDelete( 'products', null, {});
  }
}