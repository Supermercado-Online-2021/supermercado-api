
import { DataTypes } from 'sequelize'
import sequelize from "../database/"



const User = sequelize.define( 'User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING(75),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING(11),
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {
    tableName: 'users',
    timestamps: false
})



export default User;
