import Entrenamiento from "../../models/Entrenamiento.js";

const getEntrenamientos = async (req, res) => {
    try {
        const {categoria_id} = req.query
        let whereClause = {}
        if (categoria_id) {
            whereClause.categoria_id = categoria_id
        }
        const entrenamientos = await Entrenamiento.findAll({
            where: whereClause
        });
        res.status(200).json({ entrenamientos });
    } catch (error) {
        console.error('Error al obtener los entrenamientos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};


export default getEntrenamientos;
