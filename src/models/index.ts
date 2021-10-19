
import User from './User';
import Favorite from './Favorite';
import Address from './Address';

import Category from './Category';
import Product from './Product';

import CardTypes from './Card_type';
import Card from './Card';

import Cart from './Cart';



Product.belongsTo( Category, { foreignKey: 'category_id' } );
Category.hasMany( Product, { foreignKey: 'id' } );

Favorite.belongsTo( User, { foreignKey: 'user_id' });
User.hasMany( Favorite, { foreignKey: 'user_id' } );

Favorite.belongsTo( Product, { foreignKey: 'product_id' });
Product.hasMany( Favorite, { foreignKey: 'product_id' } );

Card.belongsTo( CardTypes, { foreignKey: 'type_id' } );
CardTypes.hasMany(Card, { foreignKey: 'type_id' });

Card.belongsTo( User, { foreignKey: 'user_id '} );
User.hasMany(Card, { foreignKey: 'user_id' });

Cart.belongsTo( User, { foreignKey: 'user_id'} );
User.hasMany(Cart, { foreignKey: 'user_id' });

Cart.belongsTo( Product, { foreignKey: 'product_id' } );
Product.hasMany( Cart, { foreignKey: 'product_id' });

Address.belongsTo( User, { foreignKey: 'user_id' } );
User.hasMany( Address, { foreignKey: 'id' } );



export default {
    User,
    Address,
    Favorite,

    Category,
    Product,

    CardTypes,
    Card,

    Cart
}
