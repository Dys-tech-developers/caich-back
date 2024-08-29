import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';
import Categoria from './Categoria.js';

const Jugador = sequelize.define('Jugador', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    dni: { type: DataTypes.STRING, allowNull: false, unique: true },
    telefono: { type: DataTypes.STRING, allowNull: false },
    fecha_nacimiento: { type: DataTypes.DATE, allowNull: false },
    tutor_telefono: { type: DataTypes.STRING, allowNull: false },
    categoria_id: { 
        type: DataTypes.INTEGER, 
        references: { model: Categoria, key: 'id' }
    },
    numero_socio: { type: DataTypes.STRING, allowNull: false },
    qr: { type: DataTypes.BLOB, allowNull: true },
    imagen: { type: DataTypes.BLOB, allowNull: true },
    estado: { 
        type: DataTypes.ENUM('activo', 'inactivo', 'lesionado', 'cedido', 'suspendido'), 
        allowNull: false,
        defaultValue: 'activo'
    },
    eliminado: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
}, {
    timestamps: false,
    tableName: 'dev_jugadores'
});

Categoria.hasMany(Jugador, { foreignKey: 'categoria_id' });
Jugador.belongsTo(Categoria, { foreignKey: 'categoria_id' });

export default Jugador;
