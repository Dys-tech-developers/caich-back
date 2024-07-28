import Asistencia from "../../models/Asistencia.js";
import Entrenamiento from "../../models/Entrenamiento.js";

const registrarAsistencia = async (req, res) => {
    const { dni_jugador, entrenamiento_id, fecha } = req.body;

    try {
        // Verificar si el entrenamiento existe
        const entrenamiento = await Entrenamiento.findByPk(entrenamiento_id);
        if (!entrenamiento) {
            return res.status(404).json({ error: `El entrenamiento con ID ${entrenamiento_id} no existe.` });
        }

        // Registrar la asistencia del jugador al entrenamiento
        const nuevaAsistencia = await Asistencia.create({
            dni_jugador,
            entrenamiento_id,
            fecha
        });

        res.status(201).json({ asistencia: nuevaAsistencia });
    } catch (error) {
        console.error('Error al registrar la asistencia:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export default registrarAsistencia;

