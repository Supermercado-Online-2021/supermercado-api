
import User from '@Models/User'
import Category from '@Models/Category'
import Product from './Product'



Product.belongsTo( Category, { foreignKey: 'category_id' } );



export default {
    User,
    Category,
    Product
}
