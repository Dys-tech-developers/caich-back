import Asistencia from "../../models/Asistencia.js";

const obtenerAsistencias = async (req, res) => {
    const { idEntrenamiento } = req.query; 
    
    try {
        const asistencias = await Asistencia.findAll({
            where: {
                entrenamiento_id: idEntrenamiento 
            }
        });
        res.status(200).json({ asistencias });
    } catch (error) {
        console.error('Error al obtener las asistencias:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export default obtenerAsistencias;
