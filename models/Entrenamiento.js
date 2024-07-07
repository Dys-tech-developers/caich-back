import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Categoria from './Categoria.js';

const Entrenamiento = sequelize.define('Entrenamiento', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fecha_hora: { type: DataTypes.DATE, allowNull: false },
    categoria_id: { 
        type: DataTypes.INTEGER, 
        references: { model: 'Categoria', key: 'id' },
        allowNull: false 
    }
}, {
    timestamps: false,
    tableName: 'entrenamientos'
});

Categoria.hasMany(Entrenamiento, { foreignKey: 'categoria_id' });
Entrenamiento.belongsTo(Categoria, { foreignKey: 'categoria_id' });

export default Entrenamiento;
