import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';
import Categoria from './Categoria.js';

const Partido = sequelize.define('Partido',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    rival: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estadio: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tipo_partido: {
        type: DataTypes.ENUM('amistoso', 'oficial', 'entrenamiento'),
        defaultValue: 'amistoso',
        allowNull: false
    },
    resultado: {
        type: DataTypes.STRING,
        allowNull: true
    },
    observaciones: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        references: { model: Categoria, key: 'id' },
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'dev_partidos'
}
)

Categoria.hasMany(Partido, { foreignKey: 'categoria_id' });
Partido.belongsTo(Categoria, { foreignKey: 'categoria_id' });

export default Partido;