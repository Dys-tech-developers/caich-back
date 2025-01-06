import Asistencia from "../../models/Asistencia.js"
import Jugador from "../../models/Jugador.js";

const obtenerAsistencias = async (req, res) => {
    const { idEntrenamiento, fecha } = req.query;

    try {
        // Validar que se proporcionen los parámetros requeridos
        if (!idEntrenamiento || !fecha) {
            return res.status(400).json({ error: 'Se requieren idEntrenamiento y fecha en la consulta' });
        }

        // Validar el formato de la fecha (opcional)
        const fechaValida = new Date(fecha);
        if (isNaN(fechaValida)) {
            return res.status(400).json({ error: 'El formato de la fecha no es válido' });
        }

        // Filtrar asistencias por entrenamiento_id y fecha
        let asistencias = await Asistencia.findAll({
            where: {
                entrenamiento_id: idEntrenamiento,
                fecha: fecha // Consideramos que `fecha` en la base de datos incluye solo la fecha y no la hora
            },
            include:[
                {
                    model: Jugador,
                    attributes: ['nombre', 'dni'] // Incluir solo los datos necesarios del jugador
                }
            ]
        });

        const asistenciasFormateadas = asistencias.map(asistencia => ({
            id: asistencia.id,
            fecha: asistencia.fecha,
            estado: asistencia.estado,
            jugador: asistencia.Jugador.nombre, // Acceder al nombre del jugador relacionado
            dni: asistencia.Jugador.dni // Acceder al dni del jugador relacionado
        }));

        res.status(200).json({ asistencias: asistenciasFormateadas });
    } catch (error) {
        console.error('Error al obtener las asistencias:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export default obtenerAsistencias;