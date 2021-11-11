
import sequelize from '../database';

import { DataTypes } from 'sequelize';



const OrderStatus = sequelize.define( 'OrderStatus', { 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    order_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'status',
            key: 'id'
        }
    },
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'orders',
            key: 'id'
        }
    }
});

export default OrderStatus;
