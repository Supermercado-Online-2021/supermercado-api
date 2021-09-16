
import User from './User'
import Category from './Category'
import Product from './Product'



Product.belongsTo( Category, { foreignKey: 'category_id' } );



export default {
    User,
    Category,
    Product
}
