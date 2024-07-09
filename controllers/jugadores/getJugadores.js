import Jugador from "../../models/Jugador.js";
import { Op } from "sequelize";

const getJugadores = async (req,res) => {
    try {
        const { nombre, categoria } = req.query; // mejor req.body ?? 

        let where = {estado:'activo'}

        // Agregar filtro de nombre si se proporciona
        if (nombre) {
            where.nombre = {
                [Op.like]: `%${nombre}%`
            };
        }

        // Agregar filtro de categoría si se proporciona
        if (categoria) {
            where.categoria_id = categoria;
        }
        const jugadores = await Jugador.findAll({where})

        res.status(200).json({jugadores})
    } catch (error) {
        console.error('Error fetching jugadores:', error);
        res.status(500).json({ error: 'Internal server error' });
    }

}

export default getJugadores;