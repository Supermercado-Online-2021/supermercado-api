
import { DataTypes } from 'sequelize'
import sequelize from "../database/"



const User = sequelize.define( 'User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    sobrenome: {
        type: DataTypes.STRING(75),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING(11),
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {
    tableName: 'users',
    timestamps: false
})



export default User;
