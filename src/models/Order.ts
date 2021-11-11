
import sequelize from '../database';

import { DataTypes } from 'sequelize';



const Order = sequelize.define( 'Order', { 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    order_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    price_total: {
        type: DataTypes.DECIMAL(8,2),
        allowNull: false
    },
    address_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'addresses',
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
    },
    form_payment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'payment_methods',
            key: 'id'
        }
    }
}, {
    tableName: 'orders',
    timestamps: false
});

export default Order;
