import PagoJugador from "../../models/PagoJugador.js";
import Jugador from "../../models/Jugador.js";

const createPagoJugador = async (req, res) => {
    const { dni_jugador, mes_pagado, importe, fecha_pago } = req.body;

    // PUEDO USAR NEW DATE() PARA CREAR FECHA DE PAGO CUANDO SE EJECUTE EL CONTROLADOR, PREGUNTAR


    try {
        const jugador = await Jugador.findOne({ where: { dni: dni_jugador } });
        if (!jugador) {
            return res.status(404).json({ error: 'Jugador no encontrado' });
        }

        const nuevoPagoJugador = await PagoJugador.create({
            dni_jugador,
            mes_pagado,
            importe,
            fecha_pago
        });

        res.status(201).json({ pagoJugador: nuevoPagoJugador });
    } catch (error) {
        console.error('Error al crear el pago:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export default createPagoJugador;
