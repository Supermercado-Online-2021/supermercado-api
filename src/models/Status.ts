
import sequelize from '../database';

import { DataTypes } from 'sequelize';



const Status = sequelize.define( 'Status', {
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
    tableName: 'status',
    timestamps: false
});

export default Status;
