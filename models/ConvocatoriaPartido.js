import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';
import Partido from './Partido.js';
import Jugador from './Jugador.js';

const ConvocatoriaPartido = sequelize.define('ConvocatoriaPartido', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    partido_id: {
        type: DataTypes.INTEGER,
        references: { model: Partido, key: 'id' },
        allowNull: false
    },
    jugador_id: {
        type: DataTypes.INTEGER,
        references: { model: Jugador, key: 'id' },
        allowNull: false
    },
    asistio: { type: DataTypes.BOOLEAN, defaultValue: false },
    comentario: { 
        type: DataTypes.STRING, 
        allowNull: true 
    }
}, {
    timestamps: false,
    tableName: 'dev_convocatorias_partidos'
});
sequelize.sync()

Partido.hasMany(ConvocatoriaPartido, { foreignKey: 'partido_id' });
Jugador.hasMany(ConvocatoriaPartido, { foreignKey: 'jugador_id' });
ConvocatoriaPartido.belongsTo(Partido, { foreignKey: 'partido_id' });
ConvocatoriaPartido.belongsTo(Jugador, { foreignKey: 'jugador_id' });


export default ConvocatoriaPartido;
