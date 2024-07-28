import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';
import Categoria from './Categoria.js';

const Entrenamiento = sequelize.define('Entrenamiento', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    dias_semana: {type: DataTypes.STRING, allowNull:false},
    hora: {type: DataTypes.TIME, allowNull:false},
    //fecha_hora: { type: DataTypes.DATE, allowNull: false },
    categoria_id: { 
        type: DataTypes.INTEGER, 
        references: { model: Categoria, key: 'id' },
        allowNull: false 
    }
}, {
    timestamps: false,
    tableName: 'dev_entrenamientos'
});

Categoria.hasMany(Entrenamiento, { foreignKey: 'categoria_id' });
Entrenamiento.belongsTo(Categoria, { foreignKey: 'categoria_id' });

export default Entrenamiento;
