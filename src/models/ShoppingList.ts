
import sequelize from '../database';

import { DataTypes } from 'sequelize';



const ShoppingList = sequelize.define( 'ShoppingList', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price_applied: {
        type: DataTypes.DECIMAL(6,2),
        allowNull: false
    },
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'orders',
            key: 'id'
        }
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'products',
            key: 'id'
        }
    }
}, {
    tableName: 'payment_methods',
    timestamps: false
});

export default ShoppingList;
