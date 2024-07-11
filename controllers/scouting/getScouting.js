import Scouting from "../../models/Scouting.js";
import { Op } from "sequelize";
import sequelize from "../../config/config.js";

const getScouting = async (req,res) => {
    try {
        const { nombre, puesto, anioNacimiento } = req.query; // mejor req.body ?? 

        let where = {eliminado:false}

        // Agregar filtro de nombre si se proporciona
        if (nombre) {
            where.nombre = {
                [Op.like]: `%${nombre}%`
            };
        }

        // Agregar filtro de categoría si se proporciona
        if (puesto) {
            where.puesto = puesto;
        }

        // Agregar filtro de año de nacimiento si se proporciona
        if (anioNacimiento) {
            where.fecha_nacimiento = {
                [Op.and]: [
                    sequelize.where(sequelize.fn('YEAR', sequelize.col('fecha_nacimiento')), anioNacimiento)
                ]
            };
        }
        const scouting = await Scouting.findAll({where})

        res.status(200).json({scouting})
    } catch (error) {
        console.error('Error fetching jugadores:', error);
        res.status(500).json({ error: 'Internal server error' });
    }

}

export default getScouting;