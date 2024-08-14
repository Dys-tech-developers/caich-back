import ConvocatoriaPartido from "../../models/ConvocatoriaPartido.js";
import Partido from "../../models/Partido.js";
import Jugador from "../../models/Jugador.js";

const createConvocatoria = async (req, res) => {
    const { partido_id, jugador_id, asistio, comentario } = req.body;

    try {
        // Verificar si el partido existe
        const partido = await Partido.findByPk(partido_id);
        if (!partido) {
            return res.status(404).json({ error: 'Partido no encontrado' });
        }

        // Verificar si el jugador existe
        const jugador = await Jugador.findByPk(jugador_id);
        if (!jugador) {
            return res.status(404).json({ error: 'Jugador no encontrado' });
        }

        const nuevaConvocatoria = await ConvocatoriaPartido.create({
            partido_id,
            jugador_id,
            asistio,
            comentario
        });

        res.status(201).json({ convocatoria: nuevaConvocatoria });
    } catch (error) {
        console.error('Error al crear la convocatoria:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export default createConvocatoria;