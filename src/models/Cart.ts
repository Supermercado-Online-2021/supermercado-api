
import { DataTypes } from 'sequelize';
import sequelize from "../database";



const Cart = sequelize.define( 'Cart', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    amount: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'products',
            key: 'id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    }
}, {
    tableName: 'cart',
    timestamps: false
});



export default Cart;
