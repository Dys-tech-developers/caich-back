import ConvocatoriaPartido from '../../models/ConvocatoriaPartido.js';
import Jugador from '../../models/Jugador.js';
import Partido from '../../models/Partido.js';

const getConvocatoriasByPartido = async (req, res) => {
    const { partido_id } = req.params;

    try {        
        // Buscar el partido
        const partido = await Partido.findOne({ 
            where: { id: partido_id }, 
            attributes: ['fecha', 'rival', 'estadio', 'tipo_partido', 'resultado', 'observaciones']
        });

        if (!partido) {
            return res.status(404).json({ error: 'Partido no encontrado' });
        }
         // Buscar las convocatorias para ese partido
         const convocatorias = await ConvocatoriaPartido.findAll({
            where: { partido_id },
            include: [
                {
                    model: Jugador,
                    attributes: ['nombre', 'dni']
                }
            ]
        });

        if (!convocatorias || convocatorias.length === 0) {
            return res.status(404).json({ error: 'No se encontraron convocatorias para este partido' });
        }

        // Estructura la respuesta para que los datos del partido se muestren una vez
        const response = {
            partido: {
                fecha: partido.fecha,
                rival: partido.rival,
                estadio: partido.estadio,
                tipo_partido: partido.tipo_partido,
                resultado: partido.resultado,
                observaciones: partido.observaciones
            },
            convocados: convocatorias.map(convocatoria => ({
                id: convocatoria.id,
                asistio: convocatoria.asistio,
                comentario: convocatoria.comentario,
                jugador: {
                    nombre: convocatoria.Jugador.nombre,
                    dni: convocatoria.Jugador.dni
                }
            }))
        };

        res.status(200).json(response);
    } catch (error) {
        console.error('Error al obtener las convocatorias:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export default getConvocatoriasByPartido;
