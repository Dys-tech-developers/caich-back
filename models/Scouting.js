import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

const Scouting = sequelize.define('Scouting', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    dni: { type: DataTypes.STRING, allowNull: false },
    telefono: { type: DataTypes.STRING, allowNull: false },
    telefono_contacto: { type: DataTypes.STRING, allowNull: false },
    fecha_nacimiento: { type: DataTypes.STRING, allowNull: false },
    puesto: { type: DataTypes.STRING, allowNull: false },
    club_origen: { type: DataTypes.STRING, allowNull: false },
    localidad: { type: DataTypes.STRING, allowNull: false },
    experiencia_afa: { type: DataTypes.STRING, allowNull: false },
    observaciones: { type: DataTypes.STRING, allowNull: true },
    caracteristicas: { type: DataTypes.STRING, allowNull: true },
    estado: { 
        type: DataTypes.ENUM, 
        values: ['activo', 'en proceso', 'aprobado', 'descartado', 'inactivo', 'pendiente de confirmación'],
        allowNull: false, 
        defaultValue: 'activo' 
    },
    eliminado: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
}, {
    timestamps: false,
    tableName: 'scouting'
});

export default Scouting;
