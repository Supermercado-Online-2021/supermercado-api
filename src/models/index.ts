
import User from './User';
import Favorite from './Favorite';
import Address from './Address';

import Category from './Category';
import Product from './Product';

import CardTypes from './Card_type';
import Card from './Card';

import Cart from './Cart';

import Status from './Status';
import Order from './Order';
import OrderStatus from './OrderStatus';

import PaymentMethod from './PaymentMethod';
import ShoppingList from './ShoppingList';



Product.belongsTo( Category, { foreignKey: 'category_id' } );
Category.hasMany( Product, { foreignKey: 'category_id' } );

Favorite.belongsTo( User, { foreignKey: 'user_id' });
User.hasMany( Favorite, { foreignKey: 'user_id' });

Favorite.belongsTo( Product, { foreignKey: 'product_id' });
Product.hasMany( Favorite, { foreignKey: 'product_id' });

Card.belongsTo( CardTypes, { foreignKey: 'type_id' });
CardTypes.hasMany(Card, { foreignKey: 'type_id' });

Card.belongsTo( User, { foreignKey: 'user_id '});
User.hasMany(Card, { foreignKey: 'user_id' });

Cart.belongsTo( User, { foreignKey: 'user_id'});
User.hasMany(Cart, { foreignKey: 'user_id' });

Cart.belongsTo( Product, { foreignKey: 'product_id' });
Product.hasMany( Cart, { foreignKey: 'product_id' });

Address.belongsTo( User, { foreignKey: 'user_id' });
User.hasMany( Address, { foreignKey: 'user_id' });



Order.belongsToMany( Status, { through: OrderStatus });
Status.belongsToMany( Order, { through: OrderStatus });

PaymentMethod.belongsTo( Order, { foreignKey: 'form_payment_id' });
Order.hasOne( PaymentMethod, { foreignKey: 'form_payment_id' });

Address.belongsTo( Order, { foreignKey: 'address_id' });
Order.hasOne( Address,{ foreignKey: 'address_id' });

User.hasOne( Order, { foreignKey: 'user_id' });
Order.belongsTo( User, { foreignKey: 'user_id' });



ShoppingList.hasOne( Order, { foreignKey: 'order_id' });
Order.belongsTo( ShoppingList, { foreignKey: 'order_id' });

Product.hasMany( ShoppingList, { foreignKey: 'product_id' });
ShoppingList.belongsTo( Product, { foreignKey: 'product_id' });



export default {
    User,
    Address,
    Favorite,
    Category,
    Product,
    CardTypes,
    Card,
    Cart,
    Order,
    OrderStatus,
    Status,
    ShoppingList,
    PaymentMethod
};
