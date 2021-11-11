
import sequelize from '../database';

import { DataTypes } from 'sequelize';



const PaymentMethod = sequelize.define( 'PaymentMethod', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'payment_methods',
    timestamps: false
});

export default PaymentMethod;
