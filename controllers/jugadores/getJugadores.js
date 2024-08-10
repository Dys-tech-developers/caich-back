import Jugador from "../../models/Jugador.js";
import Categoria from "../../models/Categoria.js";
import { Op } from "sequelize";

const getJugadores = async (req, res) => {
    try {
        const { nombre, categoria, dni, estado } = req.query;

        // Establece el filtro por defecto, sin restricciones
        let where = {};

        // Agregar filtro de nombre si se proporciona
        if (nombre) {
            where.nombre = {
                [Op.like]: `%${nombre}%`
            };
        }
        if (dni) {
            where.dni = {
                [Op.like]: `%${dni}%`
            };
        }

        // Agregar filtro de categoría si se proporciona
        if (categoria) {
            where.categoria_id = categoria;
        }

        // Agregar filtro de estado si se proporciona y no es una cadena vacía
        if (estado !== undefined) {
            if (estado !== "") {
                where.estado = estado;
            }
            // Si `estado` es una cadena vacía, no aplicar filtro de estado
        }

        // Agrega la inclusión de la categoría para obtener el nombre
        const jugadores = await Jugador.findAll({
            where,
            include: [{
                model: Categoria,
                attributes: ['nombre']
            }]
        });

        res.status(200).json({ jugadores });
    } catch (error) {
        console.error('Error al obtener jugadores:', error);
        res.status(500).json({ error: 'Error interno en el servidor' });
    }
}

export default getJugadores;
