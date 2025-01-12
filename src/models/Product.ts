
import { DataTypes } from 'sequelize';
import sequelize from "../database/";



const Product = sequelize.define( 'Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(4,2),
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image_src: {
        type: DataTypes.STRING,
        allowNull: false
    },
    code_bar: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categories',
            key: 'id'
        }
    },
}, {
    tableName: 'products',
    timestamps: false
});



export default Product;
