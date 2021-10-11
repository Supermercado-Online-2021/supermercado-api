
import { DataTypes } from 'sequelize'
import sequelize from "../database/"



const Category = sequelize.define( 'Category', {
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
    tableName: 'categories',
    timestamps: false
})



export default Category;
