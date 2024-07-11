import User from "../../models/User.js";
import Categoria from "../../models/Categoria.js";
import { Op } from "sequelize";


// Obtener todos los usuarios
const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error interno en el servidor' });
    }
};

// Obtener un usuario por ID
const getEntrenadores = async (req, res) => {
    try {
        const { nombre } = req.query;

        // Construir el objeto where dinámicamente
        const where = {
            role: 2
        };
//joacodimaro97@gmail.com agrega filtro
        if (nombre) {
            where.nombre = {
                [Op.like]: `%${nombre}%`
            };
        }
//joacodimaro97@gmail.com agrega nombre de categoria por entrenador
        // Realizar la consulta con los filtros necesarios
        const user = await User.findAll({
            where,
            attributes: { exclude: ['password'] },
            include: [{
                model: Categoria,
                attributes: ['nombre']
            }]
        });

        res.status(200).json(user);
    } catch (error) {
        console.error(`Error al obtener entrenadores:`, error);
        res.status(500).json({ error: 'Error interno en el servidor' });
    }
};


export { getUsers, getEntrenadores };
