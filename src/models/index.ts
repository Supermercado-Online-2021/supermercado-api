
import User from './User';
import Favorite from './Favorite';
import Address from './Address';

import Category from './Category';
import Product from './Product';



Product.belongsTo( Category, { foreignKey: 'category_id' } );

Favorite.belongsTo( User, { foreignKey: 'user_id' });
Favorite.belongsTo( Product, { foreignKey: 'product_id' });

Address.belongsTo( User, { foreignKey: 'user_id' } );



export default {
    User,
    Address,
    Favorite,

    Category,
    Product
}
