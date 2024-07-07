import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';
import User from '../models/User.js';

const Categoria = sequelize.define('Categoria', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    entrenador_id: { 
        type: DataTypes.INTEGER, 
        references: { model: User, key: 'id' },
        allowNull: false 
    },
    nombre: { type: DataTypes.STRING, allowNull: false }
}, {
    timestamps: false,
    tableName: 'categorias'
});

User.hasMany(Categoria, { foreignKey: 'entrenador_id' });
Categoria.belongsTo(User, { foreignKey: 'entrenador_id' });

export default Categoria;
