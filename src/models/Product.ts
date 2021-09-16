
import { DataTypes } from 'sequelize';
import sequelize from "../database/";



const Product = sequelize.define( 'Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(4,2),
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image_src: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codigo_barras: {
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
