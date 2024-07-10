import Jugador from "../../models/Jugador.js";
import Categoria from "../../models/Categoria.js";
import { Op } from "sequelize";

const getJugadores = async (req,res) => {
    try {
        const { nombre, categoria, dni } = req.query; 
       //joacodimaro97@gmail.com agrega mostrar activos / inactivos
        let where = {
            [Op.or]: [
              { estado: 'activo' },
              { estado: 'inactivo' }
            ]
          };

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
        //joacodimaro97@gmail.com agrega nombre de categoria de c/jugador
        const jugadores = await Jugador.findAll({
            where,
            include: [{
              model: Categoria,
              attributes: ['nombre']
            }]
          });

        res.status(200).json({jugadores})
    } catch (error) {
        console.error('Error al obtener jugadores:', error);
        res.status(500).json({ error: 'Error interno en el servidor' });
    }

}

export default getJugadores;