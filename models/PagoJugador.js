import { DataTypes } from "sequelize";
import sequelize from "../config/config.js";
import Jugador from "./Jugador.js";

const PagoJugador  = sequelize.define('PagoJugador ', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    dni_jugador: { 
        type: DataTypes.STRING, 
        references: { model: Jugador, key: 'dni' },
        allowNull: false 
    },
    mes_pagado: { type: DataTypes.STRING, allowNull: false },
    importe: { type: DataTypes.FLOAT, allowNull: false },
    fecha_pago: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
}, {
    timestamps: false,
    tableName: 'dev_pagos_jugadores'
});

Jugador.hasMany(PagoJugador, { foreignKey: 'dni_jugador', sourceKey: 'dni' });
PagoJugador.belongsTo(Jugador, { foreignKey: 'dni_jugador', targetKey: 'dni' });

export default PagoJugador;