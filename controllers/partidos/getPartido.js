import Partido from "../../models/Partido.js";

const getPartidos = async (req, res) => {
    try {
        const partidos = await Partido.findAll();
        res.status(200).json(partidos);
    } catch (error) {
        console.error('Error al obtener los partidos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export default getPartidos;