import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';
import User from './User.js';
import Categoria from './Categoria.js';

const EntrenadorCategoria = sequelize.define('EntrenadorCategoria', {
    entrenador_id: { type: DataTypes.INTEGER, primaryKey: true, references: { model: User, key: 'id' } },
    categoria_id: { type: DataTypes.INTEGER, primaryKey: true, references: { model: Categoria, key: 'id' } }
}, {
    timestamps: false,
    tableName: 'dev_entrenadores_categorias'
});

User.belongsToMany(Categoria, { through: EntrenadorCategoria, foreignKey: 'entrenador_id' });
Categoria.belongsToMany(User, { through: EntrenadorCategoria, foreignKey: 'categoria_id' });

export default EntrenadorCategoria;
