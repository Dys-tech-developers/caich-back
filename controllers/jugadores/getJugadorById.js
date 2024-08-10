import Jugador from "../../models/Jugador.js";

const getJugadorById = async (req, res) => {
    const { id } = req.params;
    try {
        const jugador = await Jugador.findByPk(id);
        if (!jugador) {
            return res.status(404).json({ error: 'Jugador no encontrado' });
        }
        // Convertir el objeto jugador a JSON y eliminar el campo qr
        const jugadorData = jugador.toJSON();
        delete jugadorData.qr; // Eliminar el campo qr
        res.status(200).json(jugadorData);
    } catch (error) {
        console.error('Error al obtener el jugador:', error);
        res.status(500).json({ error: 'Error interno en el servidor' });
    }
};

export default getJugadorById;