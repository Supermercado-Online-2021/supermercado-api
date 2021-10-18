
import User from './User';
import Favorite from './Favorite';
import Address from './Address';

import Category from './Category';
import Product from './Product';

import CardTypes from './Card_type';
import Card from './Card';



Product.belongsTo( Category, { foreignKey: 'category_id' } );

Favorite.belongsTo( User, { foreignKey: 'user_id' });
Favorite.belongsTo( Product, { foreignKey: 'product_id' });

Address.belongsTo( User, { foreignKey: 'user_id' } );

Card.belongsTo( Card, { foreignKey: 'type_id' } );
Card.belongsTo( User, { foreignKey: 'user_id '} );

CardTypes.hasMany( Card );
User.hasMany( Card );



export default {
    User,
    Address,
    Favorite,

    Category,
    Product,

    CardTypes,
    Card
}
