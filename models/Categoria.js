import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

const Categoria = sequelize.define('Categoria', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false }
}, {
    timestamps: false,
    tableName: 'dev_categorias'
});

export default Categoria;
