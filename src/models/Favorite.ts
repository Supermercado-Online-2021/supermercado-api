
import { DataTypes } from 'sequelize'
import sequelize from "../database/"



const Favorite = sequelize.define( 'Favorite', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
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
    },
}, {
    tableName: 'favorites',
    timestamps: false
})



export default Favorite;
