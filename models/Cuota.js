import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Jugador from "./Jugador.js";

const Cuota = sequelize.define('Cuota', {
    dni_jugador: { 
        type: DataTypes.STRING, 
        references: { model: 'Jugador', key: 'dni' },
        allowNull: false 
    },
    mes_pagado: { type: DataTypes.STRING, allowNull: false },
    importe: { type: DataTypes.FLOAT, allowNull: false }
}, {
    timestamps: false,
    tableName: 'cuotas'
});

Jugador.hasMany(Cuota, { foreignKey: 'dni_jugador' });
Cuota.belongsTo(Jugador, { foreignKey: 'dni_jugador' });

export default Cuota;