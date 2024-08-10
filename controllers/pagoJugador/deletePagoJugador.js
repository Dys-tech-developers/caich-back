import PagoJugador from "../../models/PagoJugador.js";

const deletePagoJugador = async (req, res) => {
    const { id } = req.params;

    try {
        const pagoJugador = await PagoJugador.findByPk(id);

        if (!pagoJugador) {
            return res.status(404).json({ error: 'Pago no encontrado' });
        }

        await pagoJugador.destroy();

        res.status(200).json({ message: 'Pago eliminado' });
    } catch (error) {
        console.error('Error al eliminar el pago:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export default deletePagoJugador;
