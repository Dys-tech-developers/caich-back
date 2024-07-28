import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';
import Jugador from './Jugador.js';
import Entrenamiento from './Entrenamiento.js';

const Asistencia = sequelize.define('Asistencia', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    dni_jugador: { 
        type: DataTypes.STRING, 
        references: { model: Jugador, key: 'dni' },
        allowNull: false 
    },
    entrenamiento_id: { 
        type: DataTypes.INTEGER, 
        references: { model: Entrenamiento, key: 'id' },
        allowNull: false 
    },
    fecha: { type: DataTypes.DATE, allowNull: false }
}, {
    timestamps: false,
    tableName: 'dev_asistencias'
});

Jugador.hasMany(Asistencia, { foreignKey: 'dni_jugador' });
Asistencia.belongsTo(Jugador, { foreignKey: 'dni_jugador' });

Entrenamiento.hasMany(Asistencia, { foreignKey: 'entrenamiento_id' });
Asistencia.belongsTo(Entrenamiento, { foreignKey: 'entrenamiento_id' });

export default Asistencia;
