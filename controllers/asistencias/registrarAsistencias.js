import Asistencia from "../../models/Asistencia.js";
import Entrenamiento from "../../models/Entrenamiento.js";

const registrarAsistencias = async (req, res) => {
    const { entrenamiento_id, jugadores, fecha } = req.body;

    try {
        // Verificar si el entrenamiento existe
        const entrenamiento = await Entrenamiento.findByPk(entrenamiento_id);
        if (!entrenamiento) {
            return res.status(404).json({ error: `El entrenamiento con ID ${entrenamiento_id} no existe.` });
        }

        //const fecha = new Date()
        // Registrar la asistencia para cada jugador seleccionado
        const asistencias = await Promise.all(
            jugadores.map(async jugador => {
                const {dni, estado} = jugador
                
                // Crear el registro de asistencia
                return await Asistencia.create({
                    dni_jugador: dni,
                    entrenamiento_id,
                    estado,
                    fecha
                });
        }));

        res.status(201).json({ asistencias });
    } catch (error) {
        console.error('Error al registrar la asistencia:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export default registrarAsistencias;
