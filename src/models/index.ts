
import User from './User';
import Category from './Category';
import Product from './Product';
import Favorite from './Favorite';



Product.belongsTo( Category, { foreignKey: 'category_id' } );

Favorite.belongsTo( User, { foreignKey: 'user_id' });
Favorite.belongsTo( Product, { foreignKey: 'product_id' });



export default {
    User,
    Category,
    Product,
    Favorite
}
