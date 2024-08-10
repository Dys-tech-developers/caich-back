import { DataTypes } from "sequelize";
import sequelize from "../config/config.js";

const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isEmail:true,
            async isUnique(value, next) {
                try {
                    const user = await User.findOne({ where: { email: value } });
                    if (user) {
                        return next('El correo electrónico ya está en uso.');
                    }
                    next();
                } catch (error) {
                    return next(err);
                }
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isOnline: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
    },    
    role:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 2
    },
    estado: { 
        type: DataTypes.ENUM('activo', 'inactivo', 'pendiente', 'eliminado'), 
        allowNull: false,
        defaultValue: 'activo'
    }

},{
    timestamps: false,
    tableName: 'dev_users',
});

export default User;