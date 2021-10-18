
import { DataTypes } from 'sequelize'
import sequelize from "../database/"



const CardTypes = sequelize.define( 'CardTypes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(25),
        allowNull: false,
    }
}, {
    tableName: 'card_types',
    timestamps: false
})



export default CardTypes;
