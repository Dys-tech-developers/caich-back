import PagoJugador from "../../models/PagoJugador.js";
import Jugador from "../../models/Jugador.js";

const getPagosJugadores = async (req, res) => {

    try {
        const {mes_pagado, categoria_id } = req.query

        const whereClause = {}

        if (mes_pagado) {
            whereClause.mes_pagado = mes_pagado
        }

        // Si se proporciona categoria_id, agregar a la condición
        const jugadorCondition = {};
        if (categoria_id) {
            jugadorCondition.categoria_id = categoria_id;
        }

        const pagosJugadores = await PagoJugador.findAll({

            where: whereClause,
            include: [{
                model: Jugador,
                where: jugadorCondition
            }],
        });


        res.status(200).json({ pagosJugadores });
    } catch (error) {
        console.error('Error al obtener los pagos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export default getPagosJugadores;
