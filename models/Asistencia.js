import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Jugador from './Jugador.js';
import Entrenamiento from './entrenamiento.js';

const Asistencia = sequelize.define('Asistencia', {
    dni_jugador: { 
        type: DataTypes.STRING, 
        references: { model: 'Jugador', key: 'dni' },
        allowNull: false 
    },
    entrenamiento_id: { 
        type: DataTypes.INTEGER, 
        references: { model: 'Entrenamiento', key: 'id' },
        allowNull: false 
    },
    fecha: { type: DataTypes.DATE, allowNull: false }
}, {
    timestamps: false,
    tableName: 'asistencias'
});

Jugador.hasMany(Asistencia, { foreignKey: 'dni_jugador' });
Asistencia.belongsTo(Jugador, { foreignKey: 'dni_jugador' });

Entrenamiento.hasMany(Asistencia, { foreignKey: 'entrenamiento_id' });
Asistencia.belongsTo(Entrenamiento, { foreignKey: 'entrenamiento_id' });

export default Asistencia;
