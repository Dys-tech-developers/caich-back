import PagoJugador from "../../models/PagoJugador.js";

const updatePagoJugador = async (req, res) => {
    const { id } = req.params;
    const { mes_pagado, importe, fecha_pago } = req.body;

    try {
        const pagoJugador = await PagoJugador.findByPk(id);

        if (!pagoJugador) {
            return res.status(404).json({ error: 'Pago no encontrado' });
        }

        pagoJugador.mes_pagado = mes_pagado || pagoJugador.mes_pagado;
        pagoJugador.importe = importe || pagoJugador.importe;
        pagoJugador.fecha_pago = fecha_pago || pagoJugador.fecha_pago;

        await pagoJugador.save();

        res.status(200).json({ pagoJugador });
    } catch (error) {
        console.error('Error al actualizar el pago:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export default updatePagoJugador;
